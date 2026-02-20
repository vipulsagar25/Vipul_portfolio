'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  tags: string[];
  href: string;
  index?: number;
  description?: string;
}

export function ProjectCard({ id, title, tags, href, index = 0, description }: ProjectCardProps) {
  return (
    <motion.a
      href={href}
      {...(href !== '#' && { target: '_blank', rel: 'noopener noreferrer' })}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
      className="group block cursor-pointer"
    >
      <div className="relative aspect-video overflow-hidden rounded-sm border border-white/5 bg-[#1a1a1a] mb-6 transition-all duration-500 group-hover:border-[#00F050]/50">
        <span className="absolute inset-0 flex items-center justify-center text-8xl font-heading text-white/5 transition-transform duration-500 group-hover:scale-125 group-hover:text-[#00F050]/10">
          {id}
        </span>
        <div className="absolute inset-0 bg-transparent transition-colors duration-500 group-hover:bg-[#00F050]/5" />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-heading mb-3 transition-colors duration-300 group-hover:text-[#00F050]">
            {title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-widest text-[#9ca3af]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <motion.div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 group-hover:border-[#00F050] group-hover:bg-[#00F050] group-hover:text-[#0a0a0a]"
          whileHover={{ rotate: 45, scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUpRight className="h-5 w-5" />
        </motion.div>
      </div>
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-[#9ca3af]">{description}</p>
      )}
    </motion.a>
  );
}
