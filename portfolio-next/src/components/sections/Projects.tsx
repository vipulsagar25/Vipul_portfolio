'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { ProjectCard } from '@/components/projects/ProjectCard';

const projects = [
  {
    id: '01',
    title: 'ArXiv Research Agent',
    tags: ['LangGraph', 'Agentic RAG', 'Qdrant', 'BGE-M3', 'LangSmith', 'LLM'],
    href: 'https://github.com/vipulsagar25/skyclad-assignment-vipul',
    description: 'End-to-end agentic RAG system using LangGraph with an 8-node conditional workflow over 100+ recent cs.AI arXiv papers, enabling autonomous retrieval, clarification, web search, refusal routing, and context-aware query enrichment. Achieved 395% retrieval improvement with BGE-M3 hybrid search, reranking on Qdrant, and LangSmith observability.',
    image: '/arxiv.png',
  },
  {
    id: '02',
    title: 'MovieGallery',
    tags: ['FastAPI', 'FAISS', 'Redis', 'ALS', 'Async Python', '33.8M Ratings'],
    href: 'https://github.com/vipulsagar25/MovieGallery',
    description: 'Production-grade movie recommendation engine serving 33.8M ratings across 330K users and 86K movies using ALS collaborative filtering with FAISS vector search. Architected decoupled ML worker with 100 async coroutines, Redis-backed queues, and resilient retry handling. Achieved 968 RPS with sub-4ms minimum latency and zero failures across 134K+ HTTP requests.',
    image: '/3.png',
  },
  {
    id: '03',
    title: 'Clinical Co-Pilot',
    tags: ['Python', 'RAG', 'LangChain', 'ChromaDB', 'FastEmbed', 'LLM'],
    href: 'https://github.com/vipulsagar25/Clinical-Co-pilot',
    description: 'RAG-based Clinical Co-Pilot processing medical PDFs for context-aware responses. Vector database with ChromaDB embeddings, semantic search, and LLM integration with structured prompting to minimize hallucinations. Designed to assist healthcare professionals with evidence-based answers from clinical literature.',
    image: '/co-pilot.png',
  },
  {
    id: '04',
    title: 'MedGemma Medical AI',
    tags: ['MedGemma', 'Medical AI', 'Image Analysis', 'Python', 'Deep Learning'],
    href: 'https://github.com/vipulsagar25/MedGemma_project',
    description: 'Medical AI system leveraging Google\'s MedGemma model for medical image analysis and clinical report generation. Combines advanced vision-language models with healthcare domain knowledge for diagnostic assistance.',
    image: '/medgemma.png',
  },
  {
    id: '05',
    title: 'AI Business Process Automation Suite',
    tags: ['n8n', 'LLM Agents', 'Workflow Automation', 'Google Sheets', 'API Integration'],
    href: 'https://github.com/vipulsagar25/N8N_workflows',
    description: 'Built end-to-end AI automation workflows integrating LLM agents, Telegram, Gmail, Google Sheets, and Webhooks. Automated lead capture, customer support, and inventory monitoring with conditional logic and structured AI responses for scalable business operations.',
    image: '/automation.png',
  },
  {
    id: '06',
    title: 'Cardiovascular Disease Prediction',
    tags: ['Python', 'Flask', 'scikit-learn', 'Neural Networks', 'Ensemble ML'],
    href: 'https://github.com/vipulsagar25/Cardiovascular_Disease_Prediction',
    description: 'Ensemble ML models for early heart disease prediction achieving 97–98% accuracy with 10,000+ patient records across 14 clinical parameters. Built with Flask API for real-time inference and clinical deployment readiness.',
    image: '/CVD.png',
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
