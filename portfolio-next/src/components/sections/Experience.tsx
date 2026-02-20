'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

const experiences: Array<{
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights?: string[];
}> = [
  {
    company: 'Indian Cybercrime Coordination Center (I4C), MHA',
    role: 'Data Analytics Intern',
    period: 'June 2025 – Aug 2025',
    location: 'New Delhi, India',
    highlights: [
      'Designed interactive dashboard for cybercrime data analysis, serving 1000+ law enforcement officials',
      'Built data ingestion pipelines using PostgreSQL and MongoDB for structured and unstructured crime reports',
      'Built graph-based data models using Neo4j to visualize complex relationships',
      'Improved data reporting efficiency by 1000%, enabling real-time insights for critical decision-making',
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" className="py-32">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center text-5xl md:text-7xl"
        >
          My Experience
        </motion.h2>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group flex cursor-pointer flex-col border-b border-white/10 px-6 py-12 transition-colors hover:bg-white/5"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-widest text-[#9ca3af] transition-colors group-hover:text-[#00F050]">
                    {exp.period}
                  </p>
                  <h3 className="text-2xl font-heading transition-colors group-hover:text-[#00F050] md:text-3xl">
                    {exp.company}
                  </h3>
                  <p className="text-lg font-medium text-white/90">{exp.role}</p>
                </div>
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="mt-4 max-w-xl space-y-2 text-[#9ca3af] md:mt-0">
                    {exp.highlights.slice(0, 3).map((h, j) => (
                      <li key={j} className="flex gap-2 text-sm">
                        <span className="text-[#00F050]">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
