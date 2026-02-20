import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { LenisProvider } from '@/components/providers/LenisProvider';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { IntroSplash } from '@/components/ui/IntroSplash';

export default function Home() {
  return (
    <LenisProvider>
      <div className="bg-[#0a0a0a] text-white selection:bg-[#00F050] selection:text-[#0a0a0a]">
        <IntroSplash />
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </LenisProvider>
  );
}
