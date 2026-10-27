"use client";

import { useState, useEffect } from "react";
import { getWhatsAppUrl, contactMessages } from "@/lib/contact";
import { MessageSquare } from "lucide-react";

export function PersistentCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const nearBottom = scrollY + winHeight > docHeight - 400;

      // Show after leaving hero (~400px), hide when approaching contact/footer
      setVisible(scrollY > 400 && !nearBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Quick contact"
      className="fixed bottom-6 right-6 z-30 transition-transform duration-200"
    >
      <a
        href={getWhatsAppUrl(contactMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[var(--accent)] text-[var(--accent-ink)] font-semibold text-sm hover:bg-[var(--accent-hover)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent)]"
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span>Start a project</span>
      </a>
    </aside>
  );
}
