'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

const skillGroups = [
  {
    category: 'AI / ML / LLMs',
    skills: [
      { name: 'LangChain', level: 90 },
      { name: 'LangGraph', level: 85 },
      { name: 'RAG Pipelines', level: 92 },
      { name: 'TensorFlow', level: 80 },
      { name: 'Keras', level: 78 },
      { name: 'scikit-learn', level: 85 },
      { name: 'OpenAI API', level: 88 },
      { name: 'Groq', level: 82 },
    ],
  },
  {
    category: 'Languages',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'SQL', level: 85 },
      { name: 'Java', level: 70 },
    ],
  },
  {
    category: 'Databases & Vector Stores',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Neo4j', level: 82 },
      { name: 'Qdrant', level: 78 },
      { name: 'ChromaDB', level: 80 },
      { name: 'FAISS', level: 82 },
      { name: 'Redis', level: 75 },
    ],
  },
  {
    category: 'Backend & DevOps',
    skills: [
      { name: 'FastAPI', level: 88 },
      { name: 'Flask', level: 80 },
      { name: 'Docker', level: 72 },
      { name: 'Git', level: 88 },
      { name: 'n8n', level: 78 },
      { name: 'REST APIs', level: 90 },
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
};

export function Skills() {
  return (
    <Section id="skills" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00F050]/3 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00F050]/3 blur-[120px] pointer-events-none" />

      <Container>
        <div className="mb-20 flex items-end justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl leading-none md:text-8xl"
          >
            Skills &
            <br />
            <span className="text-[#00F050]">Expertise</span>
          </motion.h2>
          <div className="mx-12 hidden h-px flex-1 bg-white/10 md:block" />
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.1, duration: 0.6 }}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-8"
            >
              <h3 className="mb-6 text-lg font-serif italic font-light text-[#00F050]">
                {group.category}
              </h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={tagVariants}
                    className="group relative"
                  >
                    <div className="relative overflow-hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300 transition-all duration-500 hover:border-[#00F050]/50 hover:text-white hover:bg-[#00F050]/10 cursor-default">
                      <span className="relative z-10">{skill.name}</span>
                      {/* Animated fill bar on hover */}
                      <motion.div 
                        className="absolute inset-y-0 left-0 bg-[#00F050]/10 rounded-full"
                        initial={{ width: '0%' }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-2xl border border-[#00F050]/20 bg-[#00F050]/5 p-8 text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#00F050] mb-4 font-bold">
            Currently Learning
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['MLOps', 'Advanced DSA', 'System Design', 'Kubernetes'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#00F050]/30 bg-[#00F050]/10 px-4 py-2 text-sm text-[#00F050] font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
