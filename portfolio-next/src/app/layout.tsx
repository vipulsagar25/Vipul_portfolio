import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vipul Sagar | AI/LLM Engineer & Machine Learning Expert',
  description: 'Portfolio of Vipul Sagar, an AI & Data Science Engineer specializing in ML, LLMs, RAG pipelines, and agentic workflows. Explore Vipul Sagar ML LLM projects.',
  keywords: [
    'Vipul Sagar',
    'Vipul Sagar ML LLM',
    'Vipul Sagar AI Engineer',
    'Vipul Sagar Data Science',
    'Machine Learning',
    'LLM',
    'RAG',
    'Agentic Workflows',
    'AI Developer Portfolio',
  ],
  authors: [{ name: 'Vipul Sagar' }],
  creator: 'Vipul Sagar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Vipul Sagar | AI/LLM Engineer & Machine Learning Expert',
    description: 'Portfolio of Vipul Sagar, an AI & Data Science Engineer specializing in ML, LLMs, RAG pipelines, and agentic workflows. Explore Vipul Sagar ML LLM projects.',
    siteName: 'Vipul Sagar Portfolio',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
