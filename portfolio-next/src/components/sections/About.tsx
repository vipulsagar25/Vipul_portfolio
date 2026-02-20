'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

const stackCategories = {
  'AI Tools & Platforms': ['ChatGPT', 'Claude', 'GitHub Copilot', 'OpenAI API'],
  'Programming': ['Python', 'SQL', 'Java', 'JavaScript'],
  'AI/ML': ['Machine Learning', 'Deep Learning', 'NLP', 'LLMs'],
  'Data & Databases': ['PostgreSQL', 'MongoDB', 'Neo4j', 'MySQL'],
  'Frameworks': ['scikit-learn', 'Pandas', 'NumPy', 'Flask'],
  'Tools': ['Git', 'Google Colab', 'Jupyter', 'VS Code'],
};

export function About() {
  return (
    <Section id="about" className="py-32 bg-[#0f0f0f]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="mb-32"
        >
          <h2 className="text-4xl leading-tight md:text-6xl">
            I believe in a{' '}
            <span className="font-body text-lg font-light lowercase italic text-[#00F050]">
              data driven
            </span>{' '}
            approach, building intelligent solutions that combine AI, analytics, and user-centric design
            to solve real-world problems.
          </h2>
        </motion.div>

        <div className="grid gap-20 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-[#9ca3af]">This is me.</p>
            <h2 className="text-4xl md:text-5xl">Hi, I&apos;m Vipul.</h2>
            <div className="space-y-6 text-lg leading-relaxed text-[#9ca3af]">
              <p>
                I&apos;m a pre-final year AI and Data Science student at VIPS, GGSIPU, specializing in
                Machine Learning, Frontend Development, and AI Tool Integration.
              </p>
              <p>
                As an Ex-Intern at Indian Cybercrime Coordination Center (I4C), MHA, I designed
                interactive dashboards and data pipelines serving 1000+ officials. I&apos;m an AI Tool
                Expert with hands-on experience on modern platforms. Third Runner Up at Smart Delhi
                Ideathon—I build end-to-end solutions using Python, SQL, and cutting-edge AI tech.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-12"
          >
            <h3 className="text-xl font-bold uppercase tracking-[0.3em] text-white/40">My Stack</h3>
            <div className="space-y-10">
              {Object.entries(stackCategories).map(([category, techs]) => (
                <div key={category}>
                  <p className="mb-6 text-xs uppercase tracking-widest text-[#9ca3af]">{category}</p>
                  <div className="grid grid-cols-2 gap-6">
                    {techs.map((tech) => (
                      <div
                        key={tech}
                        className="group cursor-default transition-colors hover:text-[#00F050]"
                      >
                        <p className="text-lg font-medium">{tech}</p>
                        <div className="mt-1 h-0.5 w-0 bg-[#00F050] transition-all duration-500 group-hover:w-full" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
