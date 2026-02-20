'use client';

import { Container } from '@/components/ui/Container';

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-20">
      <Container>
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="text-center md:text-left">
            <h2 className="mb-4 text-4xl font-heading">VIPUL SAGAR</h2>
            <a
              href="mailto:vipulsagar2004@gmail.com"
              className="text-xl transition-colors hover:text-[#00F050]"
            >
              vipulsagar2004@gmail.com
            </a>
          </div>
          <div className="flex gap-8">
            {[
              { label: 'GitHub', href: 'https://github.com' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vipul-sagar-0264922bb' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative transition-colors hover:text-[#00F050]"
              >
                {label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#00F050] transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
          <p className="text-sm text-[#9ca3af]">Design & built by Vipul Sagar</p>
        </div>
      </Container>
    </footer>
  );
}
