'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

const stackCategories = [
  {
    title: 'LLM & Agentic AI',
    items: [
      'LangChain',
      'LangGraph',
      'RAG Pipelines',
      'Agentic Workflows',
      'Transformer Architecture',
      'Context Optimization',
    ],
  },
  {
    title: 'ML & Deep Learning',
    items: [
      'TensorFlow',
      'Keras',
      'scikit-learn',
      'Neural Networks',
      'Feature Engineering',
      'Collaborative Filtering',
    ],
  },
  {
    title: 'Databases & Vector Stores',
    items: [
      'Neo4j (Graph DB)',
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'Qdrant',
      'ChromaDB',
      'FAISS',
    ],
  },
  {
    title: 'Languages',
    items: [
      'Python',
      'SQL',
      'Java',
      'JavaScript',
    ],
  },
  {
    title: 'Backend & APIs',
    items: [
      'FastAPI',
      'Flask',
      'REST APIs',
      'Async Python',
      'Redis',
      'n8n',
    ],
  },
  {
    title: 'LLM APIs & Tools',
    items: [
      'OpenAI API',
      'Groq',
      'LangSmith',
      'FastEmbed',
      'BGE-M3',
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function About() {
  return (
    <Section id="about" className="relative py-32 bg-[#0f0f0f] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#00F050]/5 blur-[120px] pointer-events-none" />

      <Container>
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="mb-24 max-w-5xl"
        >
          <h2 className="text-4xl leading-[1.15] md:text-6xl font-medium tracking-tight text-white">
            I believe in a{' '}
            <span className="font-serif italic font-light text-[#00F050]">
              systems-first
            </span>{' '}
            approach — engineering AI that retrieves, reasons, and acts at production scale.
          </h2>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          
          {/* ---------- LEFT: EXPERIENCE ---------- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] uppercase tracking-[0.4em] text-gray-500 mb-10 font-bold">
              About Me
            </p>

            <div className="space-y-8 text-[17px] leading-[1.8] text-gray-400">
              <p>
                I&apos;m a final-year <span className="text-white font-medium">B.Tech (AI & Data Science)</span> student
                at <span className="text-white font-medium">VIPS-GGSIPU, Delhi</span> (CGPA: 8.7), building production-grade
                AI systems — from agentic RAG pipelines to recommendation engines handling millions of data points.
              </p>

              <p>
                At <span className="text-white font-medium underline decoration-[#00F050]/30 decoration-2 underline-offset-4">I4C (Ministry of Home Affairs)</span>,
                I developed interactive dashboards and graph-based intelligence models using Neo4j, supporting cybercrime
                analysis workflows for <span className="text-white">1,000+ law enforcement officials</span>.
              </p>

              <p>
                At <span className="text-white font-medium">Avantyx Solutions</span>,
                I deployed the company&apos;s official digital infrastructure and contributed to
                early-stage product positioning and AI strategy during its foundational phase.
              </p>

              <p>
                My work spans end-to-end <span className="text-white">RAG systems</span>,
                FastAPI-based inference services, <span className="text-white">LLM-powered automation agents</span>,
                and recommendation engines — all optimized through rigorous feature engineering and robust architecture.
              </p>

              <div className="pt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-[1px] w-8 bg-[#00F050]" />
                  <p className="text-sm font-semibold text-white uppercase tracking-wider">Smart Delhi Ideathon · 3rd Runner-Up</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-[1px] w-8 bg-[#00F050]" />
                  <p className="text-sm font-semibold text-white uppercase tracking-wider">Smart India Hackathon · 2nd Runner-Up</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-[1px] w-8 bg-[#00F050]" />
                  <p className="text-sm font-semibold text-white uppercase tracking-wider">Hack LLM · IIIT Delhi</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-[1px] w-8 bg-[#00F050]" />
                  <p className="text-sm font-semibold text-white uppercase tracking-wider">Appreciation Letter · Deputy Commissioner of Police</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ---------- RIGHT: STACK ---------- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="text-[11px] uppercase tracking-[0.4em] text-gray-500 mb-10 font-bold">
              Technical Stack
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {stackCategories.map((category) => (
                <motion.div
                  key={category.title}
                  variants={cardVariants}
                  className="group rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition-all duration-500 hover:border-[#00F050]/30 hover:bg-white/[0.06]"
                >
                  <div className="mb-5">
                    <h4 className="text-xl font-serif italic font-light text-[#00F050]">
                      {category.title}
                    </h4>
                  </div>

                  <ul className="space-y-2.5">
                    {category.items.map((item) => (
                      <li key={item} className="text-[14px] text-gray-400 group-hover:text-gray-200 transition-colors">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <p className="mt-10 text-[10px] uppercase tracking-[0.3em] text-gray-600 font-medium">
              Tools: Git · Docker · Jupyter · VS Code · Google Colab · Postman · LangSmith
            </p>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}