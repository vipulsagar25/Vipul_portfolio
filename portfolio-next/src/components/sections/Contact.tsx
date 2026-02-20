'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText('vipulsagar2004@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="mb-6 text-3xl md:text-4xl">Have a project in mind?</h2>
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <motion.button
              type="button"
              onClick={handleCopy}
              className="text-xl text-[#00F050] transition-colors hover:text-white md:text-2xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              vipulsagar2004@gmail.com
            </motion.button>
            <span className="text-sm text-[#9ca3af]">(Click to copy)</span>
            {copied && (
              <motion.span
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-[#00F050]"
              >
                Copied!
              </motion.span>
            )}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
