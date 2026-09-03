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
      'Designed interactive dashboards for cybercrime data analysis, serving 1,000+ law enforcement officials across India',
      'Built data ingestion pipelines using PostgreSQL and MongoDB for structured and unstructured crime reports',
      'Built graph-based data models using Neo4j to visualize complex relationships between cybercrime entities',
      'Improved data reporting efficiency by 1000%, enabling real-time insights for critical decision-making',
    ],
  },
  {
    company: 'Avantyx Solutions',
    role: 'Web Development Intern',
    period: '20 Nov 2025 – 20 Feb 2026',
    location: 'Delhi, India',
    highlights: [
      'Built and deployed the official website for Avantyx Solutions, designing the UI/UX structure and ensuring responsive performance',
      'Contributed to early-stage market strategy, assisting in positioning, competitor analysis, and digital branding decisions',
      'Worked closely with the core team from scratch, gaining hands-on exposure to startup operations and go-to-market planning',
    ],
  },
];

const education = {
  institution: 'Vivekananda Institute of Professional Studies (VIPS-GGSIPU)',
  degree: 'B.Tech in Artificial Intelligence & Data Science',
  period: '2022 – 2026',
  location: 'Delhi, India',
  cgpa: '9',
};

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
          Experience
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
                  {exp.location && (
                    <p className="text-sm text-[#9ca3af]">{exp.location}</p>
                  )}
                </div>
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="mt-4 max-w-xl space-y-2 text-[#9ca3af] md:mt-0">
                    {exp.highlights.map((h, j) => (
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

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="mb-8 text-center text-3xl font-heading text-[#00F050] md:text-5xl">Education</h3>
          <div className="group rounded-2xl border border-white/5 bg-white/[0.03] p-8 transition-all duration-500 hover:border-[#00F050]/30 hover:bg-white/[0.06]">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <h4 className="text-xl font-heading text-white md:text-2xl">{education.institution}</h4>
                <p className="text-lg text-white/80">{education.degree}</p>
                <p className="text-sm text-[#9ca3af]">{education.location}</p>
              </div>
              <div className="text-left md:text-right space-y-1">
                <p className="text-sm uppercase tracking-widest text-[#9ca3af]">{education.period}</p>
                <p className="text-3xl font-heading text-[#00F050]">CGPA: {education.cgpa}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
