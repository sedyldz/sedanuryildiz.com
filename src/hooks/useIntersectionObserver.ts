"use client";

import { useEffect, useState, type RefObject } from "react";

export function useIntersectionObserver(
  ref: RefObject<Element>,
  options: IntersectionObserverInit = {
    threshold: 0.1,
    root: null,
    rootMargin: "0px",
  }
): boolean {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
}
