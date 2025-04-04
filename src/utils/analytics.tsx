// src/utils/analytics.tsx
import { useEffect } from "react";

export const useAnalytics = () => {
  useEffect(() => {
    // Only run in production (not in development)
    if (import.meta.env.PROD) {
      const script = document.createElement("script");
      script.src = "//gc.zgo.at/count.js";
      script.async = true;
      script.setAttribute(
        "data-goatcounter",
        "https://sedanuryildiz.goatcounter.com/count"
      );
      document.head.appendChild(script);
    }
  }, []);
};
