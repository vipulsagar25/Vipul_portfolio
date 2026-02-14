import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowRight, Github, Linkedin, 
  Mail, ExternalLink, Facebook, ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .group')) setIsHovering(true);
      else setIsHovering(false);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary pointer-events-none z-[9999] hidden md:block"
      animate={{
        x: mousePos.x - 16,
        y: mousePos.y - 16,
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? 'rgba(0, 240, 80, 0.1)' : 'transparent',
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
    />
  );
};

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
        <motion.a 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          href="#home" className="text-2xl font-heading tracking-tighter"
        >
          TAJMIRUL
        </motion.a>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a 
              key={link.name} 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              href={link.href} 
              className="text-sm font-medium hover:text-primary transition-colors tracking-widest uppercase"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            href="mailto:tasmirolislam@gmail.com" 
            className="px-6 py-2 bg-primary text-dark font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors"
          >
            Get in touch
          </motion.a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-primary">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-dark z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-4xl font-heading hover:text-primary transition-colors">
                {link.name}
              </a>
            ))}
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-primary">
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
    <div className="max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div className="space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold tracking-[0.2em] text-sm md:text-base"
          >
            FRONTEND DEVELOPER
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[12vw] md:text-[8vw] leading-[0.9] font-heading tracking-tighter uppercase"
          >
            Hi! I'm <span className="text-primary">Tajmirul</span>
          </motion.h1>
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 md:mt-0 max-w-md"
        >
          <p className="text-muted text-lg leading-relaxed mb-8">
            A creative Frontend Developer with 3+ years of experience in building high-performance, scalable, and responsive web solutions.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://www.upwork.com/freelancers/tajmirul" target="_blank" className="px-8 py-4 bg-primary text-dark font-black uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1">
              Hire Me
            </a>
            <div className="flex gap-4">
              <a href="https://github.com/Tajmirul" className="hover:text-primary transition-colors hover:scale-110"><Github /></a>
              <a href="https://www.linkedin.com/in/tajmirul" className="hover:text-primary transition-colors hover:scale-110"><Linkedin /></a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-8 py-12 border-t border-white/10"
      >
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
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-32 px-6 bg-[#0f0f0f]">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-6xl font-heading mb-12 leading-tight">
          I believe in a <span className="text-primary italic font-light lowercase font-body">user centered</span> design approach.
        </h2>
        <div className="space-y-6 text-muted text-lg leading-relaxed">
          <p>I'm Tajmirul, a frontend web developer dedicated to turning ideas into creative solutions. I specialize in creating seamless and intuitive user experiences.</p>
          <p>My approach focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives. By prioritizing performance, accessibility, and responsiveness.</p>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <h3 className="text-xl font-bold uppercase tracking-[0.3em] text-white/40">My Stack</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Redux', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'].map(tech => (
            <div key={tech} className="group cursor-default">
              <p className="text-lg font-medium group-hover:text-primary transition-colors">{tech}</p>
              <div className="h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-1"></div>
            </div>
          ))}
        </div>
      </motion.div>
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
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-heading mb-20 text-center"
        >
          My Experience
        </motion.h2>
        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-white/10 hover:bg-white/5 transition-colors px-6 cursor-pointer"
            >
              <div className="space-y-2">
                <p className="text-muted text-sm uppercase tracking-widest group-hover:text-primary transition-colors">{exp.period}</p>
                <h3 className="text-3xl font-heading group-hover:text-primary transition-colors">{exp.company}</h3>
              </div>
              <p className="text-xl font-medium mt-4 md:mt-0 group-hover:translate-x-4 transition-transform">{exp.role}</p>
            </motion.div>
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
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-heading leading-none"
          >
            Selected<br/>Projects
          </motion.h2>
          <div className="hidden md:block h-px flex-1 bg-white/10 mx-12"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video bg-[#1a1a1a] mb-8 overflow-hidden flex items-center justify-center border border-white/5 group-hover:border-primary/50 transition-all duration-700">
                 <span className="text-8xl font-heading text-white/5 group-hover:text-primary/10 transition-colors group-hover:scale-150 duration-700">{project.id}</span>
                 <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-700" />
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
                <motion.div 
                  whileHover={{ rotate: 45 }}
                  className="p-4 rounded-full border border-white/10 group-hover:bg-primary group-hover:text-dark transition-all"
                >
                  <ArrowUpRight />
                </motion.div>
              </div>
            </motion.div>
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
        {['GitHub', 'LinkedIn', 'Facebook'].map(social => (
          <a key={social} href="#" className="hover:text-primary transition-colors relative group">
            {social}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
        ))}
      </div>
      <p className="text-muted text-sm">© 2026 Tajmirul Islam. All rights reserved.</p>
    </div>
  </footer>
);

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-dark text-textPrimary selection:bg-primary selection:text-dark cursor-none">
      <CustomCursor />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />
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
