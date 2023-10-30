import { useEffect, useRef, useState } from "react";

type IHookOptions = {
  oneTime?: boolean;
};

export const useElementOnScreen = (
  intersectionOptions: IntersectionObserverInit,
  hookOptions: IHookOptions = {}
) => {
  const containerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const intersectionCallback: IntersectionObserverCallback = (
    entries,
    observer
  ) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
    if (hookOptions.oneTime && entry.isIntersecting) {
      observer.unobserve(entry.target);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      intersectionCallback,
      intersectionOptions
    );
    if (!containerRef.current) return;
    observer.observe(containerRef.current);

    return () => {
      if (!containerRef.current) return;
      observer.unobserve(containerRef.current);
    };
  });

  return [containerRef, isVisible] as const;
};
