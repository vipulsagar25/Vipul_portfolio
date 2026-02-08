import React, { useState } from 'react';
import { 
  Menu, X, ArrowRight, FileText, Github, Linkedin, 
  Mail, ExternalLink, Phone, MapPin 
} from 'lucide-react';

// --- Components defined internally ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-dark/90 backdrop-blur-sm border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-primary tracking-wider">VIPUL.DEV</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-muted hover:text-primary transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-card border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-3/4 space-y-6">
          <p className="text-primary font-medium tracking-wide">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white">Vipul Sagar</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-muted">Building Intelligent Systems.</h2>
          <p className="max-w-2xl text-lg text-gray-400 leading-relaxed">
            Pre-final year AI and Data Science student specializing in Machine Learning,
            Frontend Development, and AI Tool Integration. Ex-Intern at I4C, MHA.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#contact" className="px-6 py-3 bg-primary text-dark font-bold rounded hover:bg-blue-400 transition-colors flex items-center gap-2">
              Get In Touch <ArrowRight size={20} />
            </a>
            <a href="/resume.pdf" target="_blank" className="px-6 py-3 border border-primary text-primary font-bold rounded hover:bg-primary/10 transition-colors flex items-center gap-2">
              View Resume <FileText size={20} />
            </a>
          </div>
          <div className="flex gap-6 pt-8 text-gray-400">
            <a href="https://linkedin.com/in/vipul-sagar-0264922bb" target="_blank" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
            <a href="mailto:vipulsagar2004@gmail.com" className="hover:text-white transition-colors"><Mail size={24} /></a>
            <a href="#" className="hover:text-white transition-colors"><Github size={24} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
          <span className="text-primary mr-2">01.</span> Experience
        </h2>
        <div className="relative border-l border-gray-700 ml-4 space-y-12">
          <div className="ml-8 relative">
            <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-primary border-4 border-dark"></div>
            <div className="bg-card p-6 rounded-lg hover:translate-y-[-5px] transition-transform duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Data Analytics Intern</h3>
                  <p className="text-primary font-medium">Indian Cybercrime Coordination Center (I4C), MHA</p>
                </div>
                <div className="text-sm text-gray-400 mt-2 md:mt-0">June 2025 – Aug 2025 | New Delhi</div>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-400">
                <li>Designed and developed interactive dashboard for cybercrime data analysis, serving 1000+ law enforcement officials.</li>
                <li>Implemented robust data ingestion pipelines using PostgreSQL and MongoDB for structured and unstructured crime reports.</li>
                <li>Built graph-based data models using Neo4j to visualize complex relationships between cases, suspects, and digital evidence.</li>
                <li>Improved data reporting efficiency by 1000%, enabling real-time insights for critical decision-making processes.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Python', 'PostgreSQL', 'MongoDB', 'Neo4j', 'Data Analytics'].map(tech => (
                  <span key={tech} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Women Safety Web Application",
      description: "Developed full-stack web application featuring real-time GPS tracking and emergency alert system. Implemented machine learning algorithms for risk assessment and safe route recommendation.",
      tech: ["Python Flask", "JavaScript", "PostgreSQL", "Google Maps API", "ML"],
      links: { demo: "#", code: "#" }
    },
    {
      title: "Cardiovascular Disease Prediction",
      description: "Built ensemble machine learning models (Random Forest, SVM, Neural Networks) for early heart disease prediction with 97-98% accuracy. Deployed web application using Flask with user-friendly interface.",
      tech: ["Python", "Flask", "Scikit-learn", "Pandas", "Random Forest"],
      links: { demo: "#", code: "#" }
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
          <span className="text-primary mr-2">02.</span> Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-card p-8 rounded-lg hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <div className="text-primary">
                  <ExternalLink size={40} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex gap-4 text-gray-400">
                  <a href={project.links.code} className="hover:text-primary"><Github size={20} /></a>
                  <a href={project.links.demo} className="hover:text-primary"><ExternalLink size={20} /></a>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-gray-400 mb-6 h-auto">{project.description}</p>
              <div className="flex flex-wrap gap-3 text-sm font-mono text-muted">
                {project.tech.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    { title: "Languages & Core", skills: ["Python", "Java", "SQL", "JavaScript", "HTML/CSS", "C++"] },
    { title: "AI & Data Science", skills: ["Machine Learning", "Deep Learning", "NLP", "LLMs", "Pandas", "NumPy", "Scikit-learn"] },
    { title: "Web & Databases", skills: ["React", "Flask", "PostgreSQL", "MongoDB", "Neo4j", "MySQL", "Tailwind CSS"] },
    { title: "Tools & Platforms", skills: ["Git", "GitHub", "VS Code", "Google Colab", "Jupyter", "OpenAI API"] }
  ];

  return (
    <section id="skills" className="py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
          <span className="text-primary mr-2">03.</span> Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-colors">
              <h3 className="text-lg font-bold text-primary mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-gray-400 text-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>{skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-primary font-mono mb-4">What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          I am currently looking for new opportunities in AI/ML and Frontend Development. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <div className="flex items-center gap-3 text-gray-300">
                <Mail className="text-primary" />
                <span>vipulsagar2004@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
                <Phone className="text-primary" />
                <span>+91-9013343450</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="text-primary" />
                <span>Delhi, India</span>
            </div>
        </div>
        <a href="mailto:vipulsagar2004@gmail.com" className="inline-block px-8 py-4 border border-primary text-primary font-bold rounded hover:bg-primary/10 transition-colors">
          Say Hello
        </a>
        <footer className="mt-20 text-sm text-gray-600 font-mono">
          <p>Designed & Built by Vipul Sagar</p>
        </footer>
      </div>
    </section>
  );
};

// --- Main App Component ---

function App() {
  return (
    <div className="bg-dark min-h-screen text-text selection:bg-primary selection:text-dark">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;