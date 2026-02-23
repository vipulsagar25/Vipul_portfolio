'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { ProjectCard } from '@/components/projects/ProjectCard';

const projects = [
  {
    id: '01',
    title: 'Clinical Co-Pilot',
    tags: ['Python', 'RAG', 'LangChain', 'ChromaDB', 'FastEmbed', 'LLM Integration'],
    href: '#',
    description: 'RAG-based Clinical Co-Pilot processing medical PDFs for context-aware responses. Vector database with ChromaDB embeddings, semantic search, and LLM integration with structured prompting to minimize hallucinations.',
    image: '/co-pilot.png',
  },
  {
    id: '02',
    title: 'AI-Powered Business Process Automation Suite',
    tags: ['n8n', 'LLM Integration', 'Workflow Automation', 'Google Sheets', 'API Integrations'],
    href: '#',
    description: 'Built end-to-end AI automation workflows integrating LLM agents, Telegram, Gmail, Google Sheets, and Webhooks. Automated lead capture, customer support, and inventory monitoring with conditional logic and structured AI responses.',
    image: '/automation.png',
  },
  {
    id: '03',
    title: 'Cardiovascular Disease Prediction System',
    tags: ['Python', 'Flask', 'scikit-learn', 'Neural Networks'],
    href: '#',
    description: 'Ensemble ML models for early heart disease prediction. 97–98% accuracy with 10,000+ patient records across 14 clinical parameters.',
  },
  {
    id: '04',
    title: 'RAG VS Quant',
    tags: [],
    href: '#',
    description: 'Coming soon...',
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
