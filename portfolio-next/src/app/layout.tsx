import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vipul Sagar | AI/ML Engineer & Full Stack Developer',
  description: 'Pre-final year AI and Data Science student specializing in Machine Learning, Frontend Development, and AI Tool Integration. Ex-Intern at I4C, MHA. Third Runner Up at Smart Delhi Ideathon.',
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
