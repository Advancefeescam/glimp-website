import { useEffect, useRef } from 'react';

// Animate only meaningful items, once. Content stays readable without JS,
// IntersectionObserver or when the OS prefers reduced motion.
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const section = ref.current;
    if (!section || typeof IntersectionObserver === 'undefined') return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const items = Array.from(section.querySelectorAll('[data-motion]'));
    if (!items.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.dataset.motion = 'shown';
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 },
    );

    // Don't hide anything already visible on first paint or in a deep link.
    for (const item of items) {
      const bounds = item.getBoundingClientRect();
      if (bounds.top > window.innerHeight * 0.94 && bounds.width > 0 && bounds.height > 0) {
        item.dataset.motion = 'waiting';
        observer.observe(item);
      }
    }

    return () => {
      observer.disconnect();
      for (const item of items) {
        if (item.dataset.motion === 'waiting') item.dataset.motion = 'shown';
      }
    };
  }, []);

  return ref;
}
