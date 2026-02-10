import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowRight, FileText, Github, Linkedin, 
  Mail, ExternalLink, Phone, MapPin, Code2, Brain, Zap
} from 'lucide-react';

// --- Components defined internally ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm' 
        : 'bg-white/50 backdrop-blur-sm border-b border-gray-100'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <a href="#home" className="flex-shrink-0 group">
            {/* Clean logo - no neon glow */}
            <h1 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              Vipul Sagar
            </h1>
          </a>
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium relative group"
                >
                  {link.name}
                  {/* Subtle underline on hover */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 hover:text-blue-600 focus:outline-none transition-colors"
            >
              {isOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 animate-slideDown">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const HeroSimple = () => {
  return (
    <section id="home" className="pt-32 pb-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simplified hero with clean typography */}
        <div className="space-y-6 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Hi, I'm Vipul Sagar
          </h1>
          <h2 className="text-xl text-gray-600">
            AI/ML Engineer & Full Stack Developer building smart systems that scale
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            I'm passionate about machine learning, data engineering, and building products that
            serve millions. Currently working on cybercrime analytics at I4C. Based in New Delhi.
          </p>

          {/* Single primary CTA */}
          <div className="pt-4">
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Work <ArrowRight size={18} />
            </a>
          </div>

          {/* Contact links - minimal styling */}
          <div className="flex gap-6 pt-6 text-sm">
            <a href="mailto:vipulsagar2004@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1">
              <Mail size={16} /> Email
            </a>
            <a href="tel:+919013343450" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1">
              <Phone size={16} /> Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutMe = () => {
  return (
    <section id="about" className="py-20 section-divider">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean section header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="h-1 w-16 bg-blue-600"></div>
        </div>

        <div className="max-w-3xl space-y-8">
          {/* Main bio paragraph */}
          <p className="text-gray-700 text-base leading-relaxed">
            I'm an AI/ML engineer and full-stack developer with a passion for building systems that work at scale. With 1+ year of professional experience, I've worked on machine learning pipelines, data analytics platforms, and modern web applications that serve thousands of users.
          </p>
          
          {/* Core strengths in subtle grid */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Core Strengths</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['ML & Deep Learning', 'Data Pipelines', 'Full Stack Dev', 'System Design', 'Data Analytics', 'Team Leadership'].map((skill) => (
                <div key={skill} className="px-3 py-2 bg-gray-50 rounded border border-gray-200 text-sm text-gray-700">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <p className="text-gray-600 text-sm">
            <span className="font-semibold text-gray-900">Interests:</span> ML pipelines, data visualization, AI agents, web architecture, cloud computing
          </p>
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-20 section-divider">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean section header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="h-1 w-16 bg-blue-600"></div>
        </div>

        <div className="max-w-3xl bg-white rounded-lg border border-gray-200 p-8 hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Bachelor of Technology in AI & Data Science
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Delhi Institute of Technology
              </p>
            </div>
            <div className="text-sm text-gray-500 whitespace-nowrap">
              2021 – May 2025
            </div>
          </div>

          {/* Key metrics in a clean row */}
          <div className="flex flex-wrap gap-6 mb-6 pb-6 border-b border-gray-200">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">GPA</p>
              <p className="text-lg font-semibold text-gray-900 mt-1">3.8/4.0</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Location</p>
              <p className="text-lg font-semibold text-gray-900 mt-1">New Delhi</p>
            </div>
          </div>

          {/* Focus areas */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-3">Focus Areas</p>
            <div className="flex flex-wrap gap-2">
              {['Machine Learning', 'Deep Learning', 'NLP', 'Data Analytics', 'Cloud Computing'].map(area => (
                <span key={area} className="text-sm bg-blue-50 text-blue-900 px-3 py-1 rounded border border-blue-200">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">
            Actively involved in competitive programming and open-source contributions. Completed coursework in core ML algorithms, distributed systems, and advanced data science techniques.
          </p>
        </div>
      </div>
    </section>
  );
};

const Achievements = () => {
  const achievements = [
    {
      metric: "1000+",
      title: "Law Enforcement Officials Served",
      description: "Deployed interactive cybercrime analytics platform across India"
    },
    {
      metric: "98%",
      title: "ML Model Accuracy",
      description: "Deep learning model for disease prediction"
    },
    {
      metric: "1000%",
      title: "Efficiency Improvement",
      description: "Optimized data pipelines reducing manual processing by 90%"
    },
    {
      metric: "500K+",
      title: "Records Processed Daily",
      description: "Scalable ETL infrastructure with 99.5% data integrity"
    },
    {
      metric: "99.5%",
      title: "System Uptime SLA",
      description: "Microservices supporting 10K+ daily API requests"
    },
    {
      metric: "50+",
      title: "Organizations Supported",
      description: "Leading projects with measurable business impact"
    }
  ];

  return (
    <section id="achievements" className="py-20 section-divider">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean section header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Key Achievements
          </h2>
          <div className="h-1 w-16 bg-blue-600"></div>
        </div>

        {/* Minimalist metric grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              {/* Large, prominent metric */}
              <div className="mb-4">
                <div className="text-3xl font-bold text-blue-600">
                  {achievement.metric}
                </div>
              </div>

              {/* Title and description */}
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {achievement.title}
              </h3>
              
              <p className="text-sm text-gray-600">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  // Removed expandable state - all info visible for better scannability
  const experiences = [
    {
      title: "Data Analytics Intern",
      company: "Indian Cybercrime Coordination Center (I4C), Ministry of Home Affairs",
      period: "June 2025 – Aug 2025",
      location: "New Delhi, India",
      type: "Full-Time Internship",
      highlights: [
        "Designed and developed interactive analytics dashboard serving 1000+ law enforcement officials for real-time cybercrime data analysis",
        "Implemented robust data ingestion pipelines using PostgreSQL and MongoDB to process structured and unstructured crime reports at scale",
        "Built graph-based data models using Neo4j to visualize complex relationships between cases, suspects, and digital evidence",
        "Improved data reporting efficiency by 1000%, enabling real-time actionable insights for critical decision-making"
      ],
      tech: ["Python", "PostgreSQL", "MongoDB", "Neo4j", "Pandas", "Data Analytics"]
    },
    {
      title: "AI/ML Research Intern",
      company: "Tech Innovation Lab",
      period: "May 2024 – Jul 2024",
      location: "New Delhi",
      type: "Research Internship",
      highlights: [
        "Developed and trained machine learning models for predictive analytics achieving 95%+ accuracy",
        "Created data preprocessing pipelines handling 500K+ data points with automated validation and quality checks",
        "Published findings in internal technical reports and presented research to stakeholder teams"
      ],
      tech: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "Statistical Analysis"]
    },
    {
      title: "Full Stack Development Project Lead",
      company: "AI Safety Project",
      period: "Jan 2024 – Apr 2024",
      location: "Remote",
      type: "Project Leadership",
      highlights: [
        "Led development of full-stack web application using React and Flask for ML model deployment and inference",
        "Architected scalable backend handling 10K+ daily API requests with 99.5% uptime SLA",
        "Mentored 2 junior developers; established coding standards, best practices, and code review processes"
      ],
      tech: ["React", "Flask", "Node.js", "PostgreSQL", "Docker", "AWS"]
    },
    {
      title: "Teaching Assistant – Data Science & Python",
      company: "Delhi Institute of Technology",
      period: "Aug 2023 – Dec 2023",
      location: "New Delhi",
      type: "Academic Leadership",
      highlights: [
        "Assisted 200+ students in learning Python programming and data science fundamentals with personalized guidance",
        "Created comprehensive problem sets and developed interactive tutorial notebooks for ML algorithms",
        "Conducted weekly office hours, graded assignments, and provided constructive feedback to improve student learning outcomes"
      ],
      tech: ["Python", "Jupyter", "Pandas", "Scikit-learn", "Data Visualization"]
    }
  ];

  return (
    <section id="experience" className="py-20 section-divider">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean section header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="h-1 w-16 bg-blue-600"></div>
        </div>

        {/* Simple vertical list - easy to scan */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-md transition-shadow"
            >
              {/* Top row: role and date */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-blue-600 text-sm font-medium mt-1">{exp.company}</p>
                  <p className="text-gray-500 text-xs mt-2">{exp.location} • {exp.type}</p>
                </div>
                <div className="text-sm text-gray-500 whitespace-nowrap">
                  {exp.period}
                </div>
              </div>

              {/* Bullet points - impact-focused */}
              <ul className="space-y-2 mb-4 text-gray-700 text-sm">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-blue-600 flex-shrink-0 font-bold">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Tech stack - subtle tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                {exp.tech.map(tech => (
                  <span key={tech} className="text-xs bg-blue-50 text-blue-900 px-3 py-1 rounded border border-blue-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Cybercrime Intelligence & Analytics Platform",
      description: "End-to-end intelligence platform for law enforcement to track, analyze, and visualize cybercrime patterns across India. Supports real-time case management and evidence linking.",
      metrics: ["1000+ Users", "97% Accuracy", "Real-time Processing"],
      tech: ["React", "Node.js", "PostgreSQL", "Neo4j", "MongoDB"],
      impact: "Deployed for 1000+ law enforcement officials across India. Reduced case resolution time by 40%."
    },
    {
      title: "AI-Powered Sentiment Analysis Deep Learning Model",
      description: "Advanced NLP model using transformers to analyze sentiment and emotions from crime reports and social media trends with research-grade accuracy.",
      metrics: ["98% Accuracy", "500K+ Samples", "Multi-modal Input"],
      tech: ["Python", "TensorFlow", "LSTM", "Transformers", "BERT"],
      impact: "Achieved 98% classification accuracy on unseen test data. Published in internal research documentation."
    },
    {
      title: "Data Pipeline & ETL System for Big Data",
      description: "Scalable ETL infrastructure processing structured and unstructured cybercrime data, automating validation, cleaning, and transformation with 99.5% data integrity.",
      metrics: ["500K+ Records", "1000% Efficiency Gain", "99.5% Uptime"],
      tech: ["Apache Spark", "Pandas", "Docker", "AWS S3", "Airflow"],
      impact: "Reduced manual data processing by 90%, saving 200+ hours monthly."
    },
    {
      title: "Full Stack Web Application – AI Safety Dashboard",
      description: "Real-time monitoring dashboard for detecting harmful AI outputs. Built with scalable microservices, supports 10K+ daily API requests with 99.5% SLA.",
      metrics: ["10K+ Daily Requests", "99.5% Uptime", "Microseconds Latency"],
      tech: ["React", "Flask", "Docker", "Kubernetes", "Redis"],
      impact: "Supported 50+ organizations. Enabled proactive AI safety monitoring and incident response."
    }
  ];

  return (
    <section id="projects" className="py-20 section-divider">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean section header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-16 bg-blue-600"></div>
        </div>

        {/* 2-column grid for better scanning */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-md transition-shadow"
            >
              {/* Title with metrics as subtitle */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              
              {/* Quick metrics */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.metrics.map((metric, i) => (
                  <span key={i} className="text-xs text-blue-700 bg-blue-50 px-2 py-1 rounded">
                    {metric}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Impact statement */}
              <p className="text-gray-600 text-sm mb-4 italic border-l-2 border-blue-600 pl-3">
                {project.impact}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                {project.tech.map(tech => (
                  <span key={tech} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded border border-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  // Simplified skill categories - remove proficiency bars and emojis for cleaner look
  const skillCategories = [
    { 
      title: "Languages", 
      skills: ["Python", "JavaScript", "TypeScript", "SQL", "Java", "C++"]
    },
    { 
      title: "AI/ML & Data Science", 
      skills: ["Machine Learning", "Deep Learning", "NLP", "TensorFlow", "PyTorch", "Data Analytics"]
    },
    { 
      title: "Web & Backend", 
      skills: ["React", "Node.js", "Flask", "FastAPI", "Tailwind CSS", "REST APIs"]
    },
    { 
      title: "Databases & Tools", 
      skills: ["PostgreSQL", "MongoDB", "Neo4j", "Docker", "Git", "AWS/Azure"]
    }
  ];

  return (
    <section id="skills" className="py-20 section-divider">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean section header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="h-1 w-16 bg-blue-600"></div>
        </div>

        {/* Grid of skill categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-md transition-shadow">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                {category.title}
              </h3>
              
              {/* Simple skill tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="text-sm bg-blue-50 text-blue-900 px-4 py-2 rounded border border-blue-200 hover:border-blue-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary note */}
        <div className="mt-12 p-6 bg-white rounded-lg border border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            <span className="font-semibold text-gray-900">{skillCategories.reduce((sum, cat) => sum + cat.skills.length, 0)}+ technologies</span> with 1+ year hands-on experience in each core technology
          </p>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 section-divider">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean section header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <div className="h-1 w-16 bg-blue-600"></div>
        </div>

        <div className="max-w-3xl space-y-12">
          {/* Main CTA */}
          <div className="bg-blue-50 rounded-lg border border-blue-200 p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Have a question or project in mind?
            </h3>
            <p className="text-gray-600 mb-4">
              I'm always interested in hearing about new opportunities and collaborations. Let's connect!
            </p>
            <p className="text-sm text-gray-500">
              I typically respond within 24-48 hours.
            </p>
          </div>

          {/* Contact info grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Email */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-2">Email</p>
              <a 
                href="mailto:vipulsagar2004@gmail.com"
                className="text-blue-600 hover:text-blue-800 font-medium break-all"
              >
                vipulsagar2004@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-2">Phone</p>
              <a 
                href="tel:+919013343450"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                +91-9013343450
              </a>
            </div>
          </div>

          {/* Social links */}
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-4">Follow me</p>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/vipul-sagar-0264922bb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors underline text-sm"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/vipulsagar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors underline text-sm"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Simple footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          <p>&copy; 2025-2026 Vipul Sagar. Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </section>
  );
};

// --- Main App Component ---

function App() {
  return (
    <div className="bg-white text-gray-900 min-h-screen selection:bg-blue-100 selection:text-gray-900">
      <Navbar />
      <main>
        <HeroSimple />
        <AboutMe />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;