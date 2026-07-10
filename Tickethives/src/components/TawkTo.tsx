"use client";

import { useEffect } from "react";

export default function TawkTo() {
  useEffect(() => {
    const existing = document.getElementById("tawk-script");
    if (existing) return;

    const Tawk_API: Record<string, unknown> = {};
    (window as unknown as Record<string, unknown>).Tawk_API = Tawk_API;
    (window as unknown as Record<string, unknown>).Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    s1.id = "tawk-script";
    s1.async = true;
    s1.src = "https://embed.tawk.to/6a4fad708926201d475f4af7/1jt3jqvri";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    const s0 = document.getElementsByTagName("script")[0];
    if (s0?.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    }
  }, []);

  return null;
}
