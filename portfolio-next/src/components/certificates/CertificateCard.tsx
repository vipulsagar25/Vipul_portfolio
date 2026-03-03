'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface CertificateCardProps {
    id: string;
    title: string;
    issuer: string;
    date: string;
    index?: number;
    image?: string;
}

export function CertificateCard({ id, title, issuer, date, index = 0, image }: CertificateCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
            className="group block"
        >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a] mb-6 transition-all duration-500 group-hover:border-[#00F050]/50 shadow-lg">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#111] to-[#0a0a0a]">
                        {/* Fallback Icon */}
                        <svg className="w-16 h-16 text-white/10 mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:text-[#00F050]/20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 15.25c-1.24 0-2.25-1.01-2.25-2.25s1.01-2.25 2.25-2.25 2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25zm0-3c-.41 0-.75.34-.75.75s.34.75.75.75 .75-.34.75-.75-.34-.75-.75-.75zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 13.5v-2h-2v-1.5h2v-2h1.5v2h2v1.5h-2v2h-1.5zm6.5-7h-8v-1.5h8v1.5z" />
                        </svg>
                        <span className="text-4xl font-heading text-white/5 transition-colors duration-500 group-hover:text-[#00F050]/10">
                            {id}
                        </span>
                    </div>
                )}
                <div className="absolute inset-0 bg-transparent transition-colors duration-500 group-hover:bg-[#00F050]/5" />
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-heading leading-tight transition-colors duration-300 group-hover:text-[#00F050]">
                    {title}
                </h3>
                <div className="flex items-center gap-3 text-sm text-[#9ca3af]">
                    <span className="font-medium text-white/80">{issuer}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                    <span>{date}</span>
                </div>
            </div>
        </motion.div>
    );
}
