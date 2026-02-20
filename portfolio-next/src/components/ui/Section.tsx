'use client';

import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
};

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <motion.section id={id} {...fadeUp} className={className}>
      {children}
    </motion.section>
  );
}
