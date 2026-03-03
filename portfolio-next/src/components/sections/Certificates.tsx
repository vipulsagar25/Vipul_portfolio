'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { CertificateCard } from '@/components/certificates/CertificateCard';

const certificates = [
    {
        id: '01',
        title: 'Accenture Job Simulation',
        issuer: 'Accenture',
        date: '',
        image: '/cert/Accenture- Job Simulation.jpeg',
    },
    {
        id: '02',
        title: 'AI for Quality',
        issuer: 'Verified Credential',
        date: '',
        image: '/cert/Ai for Quality.jpeg',
    },
    {
        id: '03',
        title: 'Appreciation Letter',
        issuer: 'Deputy Commissioner of Police',
        date: '',
        image: '/cert/Appreciation Letter from Deputy Commissioner of Police.jpeg',
    },
    {
        id: '04',
        title: 'BCG Job Simulation',
        issuer: 'Boston Consulting Group',
        date: '',
        image: '/cert/BCG - Job Simulation.jpeg',
    },
    {
        id: '05',
        title: 'Data Analysis in Excel',
        issuer: 'Microsoft',
        date: '',
        image: '/cert/Data Analysis using Microsoft Excel.jpeg',
    },
    {
        id: '06',
        title: 'E-Cell Event',
        issuer: 'Entrepreneurship Cell',
        date: '',
        image: '/cert/E-cell Event.jpeg',
    },
    {
        id: '07',
        title: 'Hack LLM',
        issuer: 'IIIT Delhi',
        date: '',
        image: '/cert/Hach LLM- IIIT Delhi.jpeg',
    },
    {
        id: '08',
        title: 'Cyber Crime Co-ord Centre',
        issuer: 'I4C',
        date: '',
        image: '/cert/Indian Cyber Crime Coordination Centre.jpeg',
    },
    {
        id: '09',
        title: 'SDI Memory',
        issuer: 'Smart Delhi Ideathon',
        date: '',
        image: '/cert/SDI Memory.jpeg',
    },
    {
        id: '10',
        title: 'SDI Winner',
        issuer: 'Smart Delhi Ideathon',
        date: '',
        image: '/cert/SDI WInner.jpeg',
    },
    {
        id: '11',
        title: 'SIH Internal',
        issuer: 'Smart India Hackathon',
        date: '',
        image: '/cert/SIH Internal .jpeg',
    }
];

export function Certificates() {
    return (
        <Section id="certificates" className="py-32 bg-[#0a0a0a]">
            <Container>
                <div className="mb-20 flex items-end justify-between">
                    <motion.h2
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl leading-none md:text-8xl"
                    >
                        Certificates
                        <br />
                        & Achievements
                    </motion.h2>
                    <div className="mx-12 hidden h-px flex-1 bg-white/10 md:block" />
                </div>

                <div className="relative mt-12 flex w-full overflow-hidden group">
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, ease: 'linear', duration: 30 }}
                        className="flex w-max flex-nowrap"
                    >
                        {/* First Set */}
                        <div className="flex w-max flex-nowrap gap-6 pr-6 md:gap-10 md:pr-10">
                            {certificates.map((cert, i) => (
                                <div
                                    key={cert.id}
                                    className="w-[85vw] sm:w-[400px] md:w-[500px] shrink-0"
                                >
                                    <CertificateCard {...cert} index={i} />
                                </div>
                            ))}
                        </div>
                        {/* Second Set (Duplicate) */}
                        <div className="flex w-max flex-nowrap gap-6 pr-6 md:gap-10 md:pr-10">
                            {certificates.map((cert, i) => (
                                <div
                                    key={`dup-${cert.id}`}
                                    className="w-[85vw] sm:w-[400px] md:w-[500px] shrink-0"
                                >
                                    <CertificateCard {...cert} index={i} />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
