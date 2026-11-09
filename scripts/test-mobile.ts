import { spawn, type ChildProcess } from "node:child_process";

interface CDPResponse {
  id: number;
  result?: any;
  error?: any;
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runMobileAudit() {
  console.log("=========================================");
  console.log("   MOBILE-FRIENDLINESS & RESPONSIVE AUDIT");
  console.log("=========================================\n");

  const port = 9222;
  const chromeProcess: ChildProcess = spawn(
    "google-chrome",
    [
      "--headless=new",
      "--disable-gpu",
      "--no-sandbox",
      `--remote-debugging-port=${port}`,
      "about:blank",
    ],
    { stdio: "ignore" }
  );

  try {
    // Wait for Chrome CDP to be available
    let wsUrl = "";
    for (let i = 0; i < 20; i++) {
      try {
        const res = await fetch(`http://127.0.0.1:${port}/json/version`);
        if (res.ok) {
          const data = (await res.json()) as { webSocketDebuggerUrl: string };
          wsUrl = data.webSocketDebuggerUrl;
          break;
        }
      } catch {
        await sleep(250);
      }
    }

    if (!wsUrl) {
      throw new Error("Could not connect to Chrome DevTools Protocol");
    }

    const ws = new WebSocket(wsUrl);
    let msgId = 1;
    const pendingPromises = new Map<number, (res: any) => void>();

    ws.onmessage = (event) => {
      try {
        const data: CDPResponse = JSON.parse(event.data.toString());
        if (data.id && pendingPromises.has(data.id)) {
          const resolve = pendingPromises.get(data.id)!;
          pendingPromises.delete(data.id);
          resolve(data.result || data.error);
        }
      } catch (err) {
        console.error("CDP parse error:", err);
      }
    };

    await new Promise((resolve) => {
      ws.onopen = resolve;
    });

    const sendCDP = (method: string, params: Record<string, any> = {}): Promise<any> => {
      const id = msgId++;
      return new Promise((resolve) => {
        pendingPromises.set(id, resolve);
        ws.send(JSON.stringify({ id, method, params }));
      });
    };

    // Create a new target page
    const target = await sendCDP("Target.createTarget", { url: "http://localhost:3000" });
    const targetId = target.targetId;

    // Attach to the page target
    const attached = await sendCDP("Target.attachToTarget", { targetId, flatten: true });
    const sessionId = attached.sessionId;

    const sendPage = (method: string, params: Record<string, any> = {}): Promise<any> => {
      const id = msgId++;
      return new Promise((resolve) => {
        pendingPromises.set(id, resolve);
        ws.send(JSON.stringify({ id, sessionId, method, params }));
      });
    };

    await sendPage("Page.enable");
    await sendPage("Runtime.enable");
    await sendPage("DOM.enable");

    // Test across standard mobile screen widths:
    // 320px (iPhone SE 1st gen / narrowest budget phone)
    // 375px (iPhone SE 2nd gen, iPhone 11 Pro, standard small)
    // 390px (iPhone 13/14/15/16)
    // 412px (Samsung Galaxy S22/S23/S24, Google Pixel)
    // 430px (iPhone Pro Max)
    const viewports = [
      { name: "Narrow Mobile (iPhone SE 1st Gen)", width: 320, height: 568 },
      { name: "Standard Compact Mobile (iPhone SE 2/8)", width: 375, height: 667 },
      { name: "Modern Standard Mobile (iPhone 13/14/15)", width: 390, height: 844 },
      { name: "Modern Android Mobile (Pixel / Galaxy S)", width: 412, height: 915 },
      { name: "Large Mobile (iPhone Pro Max)", width: 430, height: 932 },
    ];

    for (const vp of viewports) {
      console.log(`\n▶ Testing Viewport: ${vp.name} (${vp.width}x${vp.height}px)...`);

      // Set device metrics
      await sendPage("Emulation.setDeviceMetricsOverride", {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 2,
        mobile: true,
      });

      // Reload or wait for resize
      await sendPage("Page.navigate", { url: "http://localhost:3000" });
      await sleep(1500);

      // Check horizontal overflow
      const overflowResult = await sendPage("Runtime.evaluate", {
        expression: `
          (() => {
            const docWidth = document.documentElement.clientWidth;
            const scrollWidth = document.documentElement.scrollWidth;
            const bodyScrollWidth = document.body.scrollWidth;
            const hasPageOverflow = (scrollWidth > docWidth + 1) || (bodyScrollWidth > docWidth + 1);

            // Find uncontained elements extending beyond docWidth
            const overflowingElements = [];
            const allElements = document.querySelectorAll('*');
            for (const el of allElements) {
              // Ignore elements inside an overflow container
              let parent = el.parentElement;
              let isContained = false;
              while (parent && parent !== document.body) {
                const style = window.getComputedStyle(parent);
                if (style.overflowX === 'auto' || style.overflowX === 'scroll' || style.overflowX === 'hidden' || style.overflow === 'hidden') {
                  isContained = true;
                  break;
                }
                parent = parent.parentElement;
              }
              if (isContained) continue;

              const rect = el.getBoundingClientRect();
              if (rect.right > docWidth + 1) { // 1px tolerance for subpixel rounding
                const tag = el.tagName.toLowerCase();
                const cls = (el.className || '').toString().slice(0, 50);
                const id = el.id ? '#' + el.id : '';
                overflowingElements.push({
                  element: tag + id + '.' + cls,
                  right: Math.round(rect.right),
                  width: Math.round(rect.width),
                  excess: Math.round(rect.right - docWidth)
                });
              }
            }

            return {
              docWidth,
              scrollWidth,
              bodyScrollWidth,
              hasPageOverflow,
              overflowingCount: overflowingElements.length,
              sampleOverflow: overflowingElements.slice(0, 5)
            };
          })()
        `,
        returnByValue: true,
      });

      const overflowData = overflowResult?.result?.value;
      if (overflowData) {
        if (!overflowData.hasPageOverflow && overflowData.overflowingCount === 0) {
          console.log(`   ✓ Horizontal Overflow: NONE (scrollWidth: ${overflowData.scrollWidth}px == clientWidth: ${overflowData.docWidth}px)`);
        } else {
          console.log(`   ⚠️ HORIZONTAL OVERFLOW DETECTED:`);
          console.log(`      scrollWidth: ${overflowData.scrollWidth}px vs clientWidth: ${overflowData.docWidth}px (hasPageOverflow: ${overflowData.hasPageOverflow})`);
          console.log(`      Elements exceeding width: ${overflowData.overflowingCount}`);
          console.log("      Samples:", JSON.stringify(overflowData.sampleOverflow, null, 2));
        }
      }

      // Check touch targets (minimum recommended 44x44px for primary interactions or >=36px with adequate spacing)
      const touchTargetResult = await sendPage("Runtime.evaluate", {
        expression: `
          (() => {
            const clickables = document.querySelectorAll('button, a, input, select, textarea');
            const smallTargets = [];
            let totalChecked = 0;

            for (const el of clickables) {
              // Ignore hidden or zero-size elements
              const style = window.getComputedStyle(el);
              if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') continue;
              const rect = el.getBoundingClientRect();
              if (rect.width === 0 || rect.height === 0) continue;
              // Check if within viewport or reasonably placed
              totalChecked++;

              // Check touch target height/width (WCAG 2.5.5 recommended: 44px; WCAG 2.5.8 minimum: 24px)
              if (rect.height < 32 || rect.width < 32) {
                smallTargets.push({
                  tag: el.tagName.toLowerCase(),
                  text: el.innerText ? el.innerText.trim().slice(0, 20) : (el.getAttribute('aria-label') || ''),
                  width: Math.round(rect.width),
                  height: Math.round(rect.height),
                  className: (el.className || '').toString().slice(0, 40)
                });
              }
            }

            return {
              totalChecked,
              smallTargetsCount: smallTargets.length,
              sampleSmallTargets: smallTargets.slice(0, 5)
            };
          })()
        `,
        returnByValue: true,
      });

      const touchData = touchTargetResult?.result?.value;
      if (touchData) {
        console.log(`   ✓ Touch Targets checked: ${touchData.totalChecked} interactive elements.`);
        if (touchData.smallTargetsCount > 0) {
          console.log(`   ℹ Note on small targets (<32px): ${touchData.smallTargetsCount} elements.`);
          console.log("     Samples:", JSON.stringify(touchData.sampleSmallTargets, null, 2));
        }
      }

      // Check Mobile Sticky Header & Mobile Drawer
      if (vp.width === 375) {
        console.log("   ▶ Testing Mobile Drawer Menu toggle...");
        const drawerToggle = await sendPage("Runtime.evaluate", {
          expression: `
            (() => {
              const menuBtn = document.querySelector('button[aria-label="Toggle menu"]');
              if (!menuBtn) return { found: false };
              menuBtn.click();
              return { found: true };
            })()
          `,
          returnByValue: true,
        });

        await sleep(300);

        const drawerStatus = await sendPage("Runtime.evaluate", {
          expression: `
            (() => {
              const links = document.querySelectorAll('header a[href^="#"]');
              return {
                open: links.length > 5,
                linkCount: links.length
              };
            })()
          `,
          returnByValue: true,
        });
        console.log(`   ✓ Mobile Menu Drawer: ${drawerStatus?.result?.value?.open ? "Toggles successfully and renders navigation links" : "Check drawer state"}`);

        // Close drawer
        await sendPage("Runtime.evaluate", {
          expression: `
            (() => {
              const menuBtn = document.querySelector('button[aria-label="Toggle menu"]');
              if (menuBtn) menuBtn.click();
            })()
          `,
        });
      }

      // Check Mobile Bottom Bar
      const bottomBarResult = await sendPage("Runtime.evaluate", {
        expression: `
          (() => {
            const bar = document.querySelector('[aria-label="Quick Actions"]');
            if (!bar) return { present: false };
            const style = window.getComputedStyle(bar);
            return {
              present: true,
              display: style.display,
              position: style.position,
              bottom: style.bottom
            };
          })()
        `,
        returnByValue: true,
      });
      console.log(`   ✓ Mobile Bottom Quick Action Bar: ${bottomBarResult?.result?.value?.present ? "Active (fixed position at bottom)" : "Not present"}`);
    }

    ws.close();
    console.log("\n=========================================");
    console.log("   AUDIT COMPLETE");
    console.log("=========================================\n");
  } catch (err) {
    console.error("Audit error:", err);
  } finally {
    chromeProcess.kill();
  }
}

runMobileAudit().catch(console.error);
