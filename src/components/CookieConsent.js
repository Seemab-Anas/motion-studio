"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem("cookie_consent");
      if (!v) setOpen(true); // show until user decides
    } catch {
      setOpen(true);
    }
  }, []);

  const accept = () => {
    try { localStorage.setItem("cookie_consent", "accepted"); } catch {}
    // notify listeners (Analytics)
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("consentAccepted"));
    }
    setOpen(false);
  };

  const decline = () => {
    try { localStorage.setItem("cookie_consent", "denied"); } catch {}
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed left-4 bottom-4 z-50">
      <div className="w-[20rem] sm:w-[22rem] rounded-xl bg-[#0B0F17] text-white shadow-xl border border-gray-700">
        <div className="p-3 sm:p-4">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <h3 className="text-base font-semibold mb-1.5">We use cookies</h3>
              <p className="text-xs text-gray-300 mb-2">
                We use essential cookies to make our site work. With your consent, we also use analytics cookies to understand usage and improve our services. You can choose to accept or decline non-essential cookies.
              </p>
              <a href="/privacy" className="text-xs underline text-gray-300 hover:text-white">Cookie policy</a>
            </div>
            <button aria-label="Close" className="text-gray-400 hover:text-white" onClick={decline}>
              <X size={18} />
            </button>
          </div>
          <div className="mt-3 flex flex-col sm:flex-row gap-2.5 sm:justify-end">
            <button onClick={decline} className="px-3 py-2 rounded-lg border border-gray-600 text-white text-sm hover:bg-gray-800">Only essential</button>
            <button onClick={accept} className="px-3 py-2 rounded-lg bg-[#045494] hover:bg-[#034273] text-white text-sm font-medium">Accept all cookies</button>
          </div>
        </div>
      </div>
    </div>
  );
}
