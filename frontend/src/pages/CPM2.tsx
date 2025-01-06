"use client";
import { useEffect } from "react";

export function CPM2() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cimtaiphos.com/401/8671254";
    script.async = true;
    script.onload = () => console.log("Script loaded successfully");
    script.onerror = (e) => console.error("Failed to load script:", e);

    (document.body || document.documentElement).appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 mt-4 flex items-center justify-center bg-white">
      {/* Add any additional content here if needed */}
    </div>
  );
}

export default CPM2;