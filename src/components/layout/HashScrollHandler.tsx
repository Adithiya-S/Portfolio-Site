"use client";

import { useEffect } from "react";

/**
 * Handles smooth in-page scrolling without adding hash fragments (e.g. #work)
 * to the browser URL address bar.
 */
export function HashScrollHandler() {
  useEffect(() => {
    // 1. If user lands on a link with an existing hash (e.g. /#work shared from elsewhere),
    // scroll to that section and cleanly remove the hash from the address bar.
    if (window.location.hash) {
      const targetId = window.location.hash.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }

    // 2. Intercept clicks on anchor tags pointing to hash IDs
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      // Allow default behavior for accessible skip-to-content links
      if (anchor.classList.contains("sr-only")) return;

      e.preventDefault();

      if (href === "#" || href === "#top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
