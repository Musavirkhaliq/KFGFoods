"use client";

import React, { useEffect, useState } from "react";
import { Compass } from "lucide-react";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function MobileBottomBar() {
  const [visible, setVisible] = useState(true);

  // Auto-hide when near footer or forms if desired, or keep as a slim, elegant bar
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      // Hide right at the very bottom so footer is completely unobstructed
      if (currentScrollY + clientHeight >= scrollHeight - 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="xl:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#E2E8E0] p-2.5 px-4 shadow-lg transition-transform duration-300"
      style={{ paddingBottom: "max(10px, env(safe-area-inset-bottom))" }}
      role="region"
      aria-label="Quick Actions"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="#products"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#E8EEE6] hover:bg-[#d8e2d5] text-[#1B5E20] font-medium text-xs sm:text-sm transition-colors active:scale-98"
        >
          <Compass className="w-4 h-4 text-[#1B5E20]" />
          <span>Explore Products</span>
        </a>

        <a
          href={getGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#1B5E20] hover:bg-[#144718] text-white font-medium text-xs sm:text-sm transition-all shadow active:scale-98"
          aria-label="Order on WhatsApp"
        >
          <svg
            className="w-4 h-4 fill-current text-[#4ADE80]"
            viewBox="0 0 24 24"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.976.58 1.942.923 3.149.923 3.182 0 5.767-2.587 5.767-5.766 0-3.18-2.586-5.765-5.767-5.765zm0 10.354c-1.026 0-1.936-.312-2.731-.861l-.196-.134-1.393.366.372-1.358-.128-.204c-.615-.978-.941-1.897-.94-2.797 0-2.518 2.048-4.566 4.568-4.566 2.519 0 4.568 2.048 4.568 4.566 0 2.519-2.049 4.567-4.568 4.567zm4.254-2.812c-.234-.117-1.385-.683-1.6-.761-.215-.078-.372-.117-.528.117-.156.234-.607.761-.744.918-.137.156-.274.176-.508.059-.234-.117-.988-.364-1.882-1.161-.696-.621-1.166-1.388-1.303-1.622-.137-.234-.015-.36.103-.477.106-.105.234-.274.351-.411.117-.137.156-.234.234-.391.078-.156.039-.293-.02-.411-.059-.117-.528-1.272-.724-1.742-.191-.458-.385-.396-.528-.403l-.45-.008c-.156 0-.411.059-.626.293-.215.234-.822.803-.822 1.958s.841 2.271.958 2.428c.117.156 1.656 2.528 4.012 3.545.56.242.998.386 1.34.495.563.179 1.075.154 1.48.093.451-.067 1.385-.566 1.58-1.113.195-.547.195-1.016.137-1.113-.058-.098-.214-.156-.448-.273z" />
          </svg>
          <span>Order on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
