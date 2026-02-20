'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
};

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24">
      <Container>
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between"
        >
          <div className="space-y-4">
            <motion.p
              variants={item}
              className="text-sm font-bold tracking-[0.2em] text-[#00F050] md:text-base"
            >
              AI/ML and LLM Orchestration
            </motion.p>
            <motion.h1
              variants={item}
              className="text-[12vw] leading-[0.9] tracking-tighter md:text-[8vw]"
            >
              Hi! I&apos;m <span className="text-[#00F050]">Vipul</span>
            </motion.h1>
          </div>

          <motion.div variants={item} className="mt-8 max-w-md md:mt-0">
            <p className="mb-8 text-lg leading-relaxed text-[#9ca3af]">
              Pre-final year AI and Data Science student specializing in Machine Learning, Frontend Development,
              and AI Tool Integration. Ex-Intern at I4C, MHA. Third Runner Up at Smart Delhi Ideathon.
            </p>
            <div className="flex items-center gap-6">
              <Button href="/Vipul_1225.pdf" magnetic variant="primary">
                Resume
              </Button>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#00F050]"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vipul-sagar-0264922bb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#00F050]"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid grid-cols-2 gap-8 border-t border-white/10 py-12 md:grid-cols-3"
        >
          <motion.div variants={item}>
            <h3 className="text-4xl font-heading text-[#00F050] md:text-6xl">1+</h3>
            <p className="mt-2 text-xs uppercase tracking-widest text-[#9ca3af]">Internship Experience</p>
          </motion.div>
          <motion.div variants={item}>
            <h3 className="text-4xl font-heading text-[#00F050] md:text-6xl">2+</h3>
            <p className="mt-2 text-xs uppercase tracking-widest text-[#9ca3af]">Completed Projects</p>
          </motion.div>
          <motion.div variants={item} className="hidden md:block">
            <h3 className="text-4xl font-heading text-[#00F050] md:text-6xl">8.7</h3>
            <p className="mt-2 text-xs uppercase tracking-widest text-[#9ca3af]">CGPA (Current)</p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
