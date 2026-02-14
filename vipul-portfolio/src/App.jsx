import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowRight, Github, Linkedin, 
  Mail, ExternalLink, Facebook, ArrowUpRight
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-dark/80 backdrop-blur-xl py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl font-heading tracking-tighter">TAJMIRUL</a>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-primary transition-colors tracking-widest uppercase">
              {link.name}
            </a>
          ))}
          <a href="mailto:tasmirolislam@gmail.com" className="px-6 py-2 bg-primary text-dark font-bold text-sm uppercase tracking-wider">
            Get in touch
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-primary">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-dark z-40 flex flex-col items-center justify-center space-y-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-4xl font-heading hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-primary">
            <X size={32} />
          </button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="min-h-screen flex flex-col justify-center px-6 pt-20">
    <div className="max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div className="space-y-4">
          <h2 className="text-primary font-bold tracking-[0.2em] text-sm md:text-base">FRONTEND DEVELOPER</h2>
          <h1 className="text-[12vw] md:text-[8vw] leading-[0.9] font-heading tracking-tighter uppercase">
            Hi! I'm <span className="text-primary">Tajmirul</span>
          </h1>
        </div>
        <div className="mt-8 md:mt-0 max-w-md">
          <p className="text-muted text-lg leading-relaxed mb-8">
            A creative Frontend Developer with 3+ years of experience in building high-performance, scalable, and responsive web solutions.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://www.upwork.com/freelancers/tajmirul" target="_blank" className="px-8 py-4 bg-primary text-dark font-black uppercase tracking-widest hover:scale-105 transition-transform">
              Hire Me
            </a>
            <div className="flex gap-4">
              <a href="https://github.com/Tajmirul" className="hover:text-primary transition-colors"><Github /></a>
              <a href="https://www.linkedin.com/in/tajmirul" className="hover:text-primary transition-colors"><Linkedin /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-12 border-t border-white/10">
        <div>
          <h3 className="text-4xl md:text-6xl font-heading text-primary">3+</h3>
          <p className="text-xs uppercase tracking-widest text-muted mt-2">Years Experience</p>
        </div>
        <div>
          <h3 className="text-4xl md:text-6xl font-heading text-primary">7+</h3>
          <p className="text-xs uppercase tracking-widest text-muted mt-2">Completed Projects</p>
        </div>
        <div className="hidden md:block">
          <h3 className="text-4xl md:text-6xl font-heading text-primary">10K+</h3>
          <p className="text-xs uppercase tracking-widest text-muted mt-2">Hours Worked</p>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-32 px-6 bg-[#0f0f0f]">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
      <div>
        <h2 className="text-4xl md:text-6xl font-heading mb-12 leading-tight">
          I believe in a <span className="text-primary italic font-light lowercase font-body">user centered</span> design approach.
        </h2>
        <div className="space-y-6 text-muted text-lg leading-relaxed">
          <p>I'm Tajmirul, a frontend web developer dedicated to turning ideas into creative solutions. I specialize in creating seamless and intuitive user experiences.</p>
          <p>My approach focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives. By prioritizing performance, accessibility, and responsiveness.</p>
        </div>
      </div>
      
      <div className="space-y-12">
        <h3 className="text-xl font-bold uppercase tracking-[0.3em] text-white/40">My Stack</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Redux', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'].map(tech => (
            <div key={tech} className="group cursor-default">
              <p className="text-lg font-medium group-hover:text-primary transition-colors">{tech}</p>
              <div className="h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-1"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => {
  const experiences = [
    { company: "Strativ AB", role: "Software Engineer (Frontend)", period: "Dec 2024 - Present" },
    { company: "Epikcoders", role: "Frontend Developer", period: "Oct 2023 - Nov 2024" },
    { company: "Anchorblock Technology", role: "Frontend Engineer", period: "Oct 2022 - Sep 2023" },
    { company: "Branex IT", role: "Frontend Developer", period: "Jan 2022 - Oct 2022" }
  ];

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-heading mb-20 text-center">My Experience</h2>
        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <div key={i} className="group flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-white/10 hover:bg-white/5 transition-colors px-6">
              <div className="space-y-2">
                <p className="text-muted text-sm uppercase tracking-widest">{exp.period}</p>
                <h3 className="text-3xl font-heading group-hover:text-primary transition-colors">{exp.company}</h3>
              </div>
              <p className="text-xl font-medium mt-4 md:mt-0">{exp.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    { id: "01", title: "Electro EV", tags: ["Next.js", "Payload CMS", "Tailwind CSS"] },
    { id: "02", title: "Epikcart", tags: ["React", "Redux", "React i18n"] },
    { id: "03", title: "Resume Roaster", tags: ["GPT-4", "Next.js", "PostgreSQL"] },
    { id: "04", title: "Real Estate", tags: ["React.js", "Redux", "Tailwind CSS"] }
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-20">
          <h2 className="text-5xl md:text-8xl font-heading leading-none">Selected<br/>Projects</h2>
          <div className="hidden md:block h-px flex-1 bg-white/10 mx-12"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="aspect-video bg-[#1a1a1a] mb-8 overflow-hidden flex items-center justify-center border border-white/5 group-hover:border-primary/50 transition-colors">
                 <span className="text-8xl font-heading text-white/5 group-hover:text-primary/10 transition-colors">{project.id}</span>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-3xl font-heading mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full text-muted">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-4 rounded-full border border-white/10 group-hover:bg-primary group-hover:text-dark transition-all">
                  <ArrowUpRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="text-center md:text-left">
        <h2 className="text-4xl font-heading mb-4">TAJMIRUL</h2>
        <a href="mailto:tasmirolislam@gmail.com" className="text-xl hover:text-primary transition-colors">tasmirolislam@gmail.com</a>
      </div>
      <div className="flex gap-8">
        <a href="https://github.com/Tajmirul" className="hover:text-primary transition-colors">GitHub</a>
        <a href="https://www.linkedin.com/in/tajmirul" className="hover:text-primary transition-colors">LinkedIn</a>
        <a href="https://www.facebook.com/tajmirul.2000" className="hover:text-primary transition-colors">Facebook</a>
      </div>
      <p className="text-muted text-sm">© 2026 Tajmirul Islam. All rights reserved.</p>
    </div>
  </footer>
);

function App() {
  return (
    <div className="bg-dark text-textPrimary selection:bg-primary selection:text-dark">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
