'use client';

import { useEffect, useRef } from 'react';

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let lenis: { destroy: () => void; raf: (time: number) => void } | null = null;

    const initLenis = async () => {
      const LenisModule = await import('lenis');
      const Lenis = LenisModule.default;
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time: number) {
        if (lenis) lenis.raf(time);
        rafRef.current = requestAnimationFrame(raf);
      }
      rafRef.current = requestAnimationFrame(raf);
    };

    initLenis();

    return () => {
      cancelAnimationFrame(rafRef.current);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
