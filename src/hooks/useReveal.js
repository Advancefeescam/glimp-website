import { useEffect, useRef } from 'react';

// Progressive enhancement: zonder observer en bij reduced motion is inhoud direct zichtbaar.
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          el.dataset.reveal = 'in';
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -7% 0px', threshold: 0.06 },
    );

    if (el.getBoundingClientRect().top > window.innerHeight * 0.92) {
      el.dataset.reveal = 'pending';
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return ref;
}
