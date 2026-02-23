'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAME = 'VIPUL SAGAR';
const easeOut = [0.16, 1, 0.3, 1];

const letterVariants = (i: number, totalLength: number) => ({
  initial: { opacity: 0, y: 60 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.05 + i * 0.03,
    }
  },
  exit: { 
    opacity: 0, 
    y: 60,
    transition: {
      duration: 0.5,
      delay: 0.05 + (totalLength - 1 - i) * 0.03,
    }
  }
});

export function IntroSplash() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showSplash && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[60] overflow-hidden"
        >
          {/* Center: staggered letter reveal - z-20 so above curtains */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="flex">
              {NAME.split('').map((char, i) => (
                <motion.span
                  key={i}
                  variants={letterVariants(i, NAME.length)}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="text-6xl font-heading tracking-tight text-white md:text-8xl lg:text-9xl"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Curtain panels - split reveal (top slides up, bottom slides down) */}
          <motion.div
            initial={{ y: 0 }}
            exit={{
              y: '-100%',
              transition: { duration: 0.65, ease: easeOut },
            }}
            className="absolute left-0 right-0 top-0 z-10 h-1/2 bg-[#0a0a0a]"
          />
          <motion.div
            initial={{ y: 0 }}
            exit={{
              y: '100%',
              transition: { duration: 0.65, ease: easeOut },
            }}
            className="absolute bottom-0 left-0 right-0 z-10 h-1/2 bg-[#0a0a0a]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
