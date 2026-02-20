'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { ProjectCard } from '@/components/projects/ProjectCard';

const projects = [
  {
    id: '01',
    title: 'Women Safety Web Application',
    tags: ['Flask', 'JavaScript', 'PostgreSQL', 'Google Maps API', 'ML'],
    href: '#',
    description: 'Smart Delhi Ideathon 2025 — 3rd Runner Up among 500+ teams. Full-stack app with real-time GPS tracking, emergency alerts, ML-based risk assessment & safe route recommendation.',
  },
  {
    id: '02',
    title: 'Cardiovascular Disease Prediction System',
    tags: ['Python', 'Flask', 'scikit-learn', 'Neural Networks'],
    href: '#',
    description: 'Ensemble ML models (Random Forest, SVM, Neural Networks) for early heart disease prediction. 97–98% accuracy, 10,000+ patient records, 14 clinical parameters.',
  },
];

export function Projects() {
  return (
    <Section id="projects" className="py-32 bg-[#0f0f0f]">
      <Container>
        <div className="mb-20 flex items-end justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl leading-none md:text-8xl"
          >
            Selected
            <br />
            Projects
          </motion.h2>
          <div className="mx-12 hidden h-px flex-1 bg-white/10 md:block" />
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} {...project} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
