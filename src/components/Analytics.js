"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

// Loads Google Analytics only when consent is granted
export default function Analytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Check stored consent
    try {
      const v = typeof window !== "undefined" ? localStorage.getItem("cookie_consent") : null;
      if (v === "accepted") setEnabled(true);
    } catch {}

    // Listen for consent changes
    function onConsentAccepted() {
      setEnabled(true);
    }
    window.addEventListener("consentAccepted", onConsentAccepted);
    return () => window.removeEventListener("consentAccepted", onConsentAccepted);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-6LSQ2K35X9" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());
          gtag('config', 'G-6LSQ2K35X9');
        `}
      </Script>
    </>
  );
}
