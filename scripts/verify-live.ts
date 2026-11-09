import assert from "node:assert";

async function verifyLiveServer() {
  console.log("Checking live server response at http://localhost:3000...");
  const res = await fetch("http://localhost:3000");
  assert.strictEqual(res.status, 200, "Server status must be 200");
  const html = await res.text();

  console.log("Checking required sections and IDs...");
  const requiredIds = [
    'id="about"',
    'id="products"',
    'id="health-challenge"',
    'id="science"',
    'id="assessment"',
    'id="subscriptions"',
    'id="evidence"',
    'id="partnership"',
    'id="leadership"',
  ];

  for (const id of requiredIds) {
    assert(html.includes(id), `Section ${id} must be present in HTML`);
  }
  console.log("✓ All 9 navigation anchor IDs found in live HTML.");

  console.log("Checking brand credentials...");
  assert(html.includes("KFGFoods"), "Brand name KFGFoods must be present");
  assert(html.includes("logo.png") || html.includes("logo.jpeg") || html.includes("Logo.jpeg"), "Logo image must be present");
  assert(html.includes("Wholesome Food, Happier You"), "Brand tagline from logo must be present");
  assert(html.includes("11023470000115"), "FSSAI license must be present");
  assert(html.includes("Lassipora"), "SIDCO Lassipora industrial unit must be present");
  assert(html.includes("Pulwama"), "Pulwama must be present");
  assert(html.includes("Baramulla"), "Baramulla regional office must be present");
  assert(html.includes("Haleeb&#x27;s Glaxy") || html.includes("Haleeb's Glaxy"), "Haleeb's Glaxy partner must be present");
  assert(html.includes("EduCasheer Private Limited"), "EduCasheer credit must be present");
  assert(html.includes("https://www.educasheer.in"), "EduCasheer link must be present");
  assert(html.includes("916006922754"), "WhatsApp number 916006922754 must be present");
  console.log("✓ All brand credentials verified.");

  console.log("Checking health stats & scientific references...");
  assert(html.includes("18.9%"), "18.9% prevalence must be in HTML");
  assert(html.includes("26.5%"), "26.5% urban burden must be in HTML");
  assert(html.includes("40.0%"), "40.0% undiagnosed must be in HTML");
  assert(html.includes("29.6%"), "29.6% cardiovascular mortality must be in HTML");
  console.log("✓ Regional health stats verified.");

  console.log("\n=========================================");
  console.log("  LIVE SERVER VERIFICATION SUCCESSFUL! ✨");
  console.log("=========================================\n");
}

verifyLiveServer().catch((err) => {
  console.error("Verification failed:", err);
  process.exit(1);
});
