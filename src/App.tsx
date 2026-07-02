import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  Briefcase, 
  Code, 
  BookOpen, 
  Award, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  Download, 
  ChevronRight, 
  Layers, 
  CheckCircle
} from "lucide-react";

import { resumeData } from "./resumeData.js";

import InteractivePhoto from "./components/InteractivePhoto.tsx";
import ProjectCard from "./components/ProjectCard.tsx";
import ContactForm from "./components/ContactForm.tsx";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ai_ml' | 'systems'>('all');

  const filteredProjects = selectedCategory === 'all' 
    ? resumeData.projects 
    : resumeData.projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-brand-darker text-slate-100 flex flex-col relative select-text antialiased">
      
      {/* Absolute Decorative Blurred Background Blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Sticky Navigation Bar */}
      <header className="sticky top-0 z-40 w-full glass border-b border-slate-800/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
              <span className="font-mono text-brand-teal font-bold text-sm">DP</span>
            </div>
            <div>
              <span className="font-semibold text-sm tracking-tight text-white block">DEVA PRASANNA PRINCE</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#internships" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#credentials" className="hover:text-white transition-colors">Credentials</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a 
              id="btn-nav-github"
              href={resumeData.personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 hover:bg-slate-800/60 rounded-lg text-slate-400 hover:text-white transition-all cursor-pointer"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              id="btn-nav-linkedin"
              href={resumeData.personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 hover:bg-slate-800/60 rounded-lg text-slate-400 hover:text-white transition-all cursor-pointer"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            {/* Quick Resume Link or trigger email for download */}
            <a
              id="btn-nav-resume"
              href="/resume.pdf"
              download="M_Deva_Prasanna_Prince_Resume.pdf"
              className="text-xs font-semibold text-brand-cyan hover:text-white border border-amber-500/20 hover:border-amber-500/60 rounded-full px-3.5 py-1.5 transition-all bg-amber-500/5 cursor-pointer flex items-center gap-1.5"
            >
              <Download className="w-3 h-3" />
              <span>Get Resume</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-24">

        {/* Section 1: Hero Banner */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                Hi, I'm <span className="gradient-text">{resumeData.personalInfo.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300">
                {resumeData.personalInfo.title}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl"
            >
              {resumeData.personalInfo.summary}
            </motion.p>

            {/* Quick Contact Chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <a 
                id="hero-email-chip"
                href={`mailto:${resumeData.personalInfo.email}`}
                className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-brand-cyan transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-teal" />
                <span>{resumeData.personalInfo.email}</span>
              </a>
              <a 
                id="hero-phone-chip"
                href={`tel:${resumeData.personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-brand-cyan transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-teal" />
                <span>{resumeData.personalInfo.phone}</span>
              </a>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                id="btn-hero-projects"
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-teal hover:opacity-95 text-white font-semibold text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Explore My Projects</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                id="btn-hero-contact"
                href="#contact"
                className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-slate-200 hover:text-white font-semibold text-sm transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Get in Touch</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Interactive Photo Space & Quick Highlights */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-center items-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full flex justify-center"
            >
              <InteractivePhoto />
            </motion.div>

          </div>
        </section>

        {/* Section 2: Education & Academic Overview */}
        <section id="education" className="space-y-8">
          <div className="border-l-2 border-brand-teal pl-4">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <BookOpen className="w-5.5 h-5.5 text-brand-teal" /> Academic Foundation
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Rigorous B.Tech training in Artificial Intelligence & Data Science
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white tracking-tight">
                {resumeData.education.degree}
              </h3>
              <p className="text-sm text-gray-400 font-medium">
                {resumeData.education.institution}, {resumeData.education.location}
              </p>
              <div className="flex items-center gap-3 text-xs text-slate-500 font-mono mt-1">
                <span>{resumeData.education.period}</span>
                <span>•</span>
                <span className="text-brand-teal">Coimbatore, Tamil Nadu</span>
              </div>
            </div>


          </div>
        </section>

        {/* Section 3: Internship Experience */}
        <section id="internships" className="space-y-8">
          <div className="border-l-2 border-brand-teal pl-4">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Briefcase className="w-5.5 h-5.5 text-brand-teal" /> Industry Internships
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Practical application of analytics, machine learning, and frontend architecture
            </p>
          </div>

          <div className="relative border-l border-slate-800 pl-6 sm:pl-8 ml-4 space-y-12">
            {resumeData.internships.map((internship, index) => (
              <motion.div
                key={index}
                className="relative space-y-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline node */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-4 h-4 rounded-full bg-brand-darker border-2 border-brand-teal flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-lg font-semibold text-white tracking-tight flex items-center gap-2">
                      {internship.role}
                    </h3>
                    <p className="text-sm text-brand-teal font-medium">
                      {internship.company} <span className="text-gray-500 font-normal">| {internship.location}</span>
                    </p>
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-500 self-start sm:self-center bg-slate-950 border border-slate-800/80 rounded px-2.5 py-1">
                    {internship.period}
                  </span>
                </div>

                <div className="space-y-2 mt-3">
                  {internship.bullets.map((bullet, bIdx) => (
                    <p key={bIdx} className="text-xs sm:text-sm text-gray-400 leading-relaxed flex items-start gap-2">
                      <span className="text-brand-teal select-none mt-1">•</span>
                      <span>{bullet}</span>
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 4: Projects Showcase */}
        <section id="projects" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-l-2 border-brand-teal pl-4">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <Code className="w-5.5 h-5.5 text-brand-teal" /> Featured Projects
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                Explore core systems designed to run locally, on servers, or on low-resource hardware
              </p>
            </div>

            {/* Project Filters */}
            <div className="flex items-center gap-2 bg-slate-950 border border-slate-800/60 p-1 rounded-xl self-start sm:self-auto shrink-0 font-mono text-[11px]">
              <button
                id="btn-filter-all"
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedCategory === 'all' 
                    ? "bg-brand-teal text-white shadow-sm font-semibold" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                All
              </button>
              <button
                id="btn-filter-ai"
                onClick={() => setSelectedCategory('ai_ml')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedCategory === 'ai_ml' 
                    ? "bg-brand-teal text-white shadow-sm font-semibold" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                AI/ML
              </button>
              <button
                id="btn-filter-systems"
                onClick={() => setSelectedCategory('systems')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedCategory === 'systems' 
                    ? "bg-brand-teal text-white shadow-sm font-semibold" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Systems
              </button>
            </div>
          </div>

          {/* Grid Layout for Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Section 5: Technical Skills */}
        <section id="skills" className="space-y-8">
          <div className="border-l-2 border-brand-teal pl-4">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Layers className="w-5.5 h-5.5 text-brand-teal" /> Skills Inventory
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Structured capabilities backed by hands-on academic & project usage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumeData.skills.map((group, index) => (
              <motion.div
                key={index}
                className="rounded-2xl bg-slate-900/40 border border-slate-800/80 p-5 hover:border-amber-500/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <h3 className="font-mono text-xs font-bold text-brand-cyan tracking-wider uppercase mb-4 pb-2 border-b border-slate-800/60">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      id={`skill-tag-${index}-${sIdx}`}
                      key={sIdx}
                      className="text-xs px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-850 hover:border-amber-500/30 text-slate-200 transition-all font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 6: Achievements, Certifications & Languages */}
        <section id="credentials" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Hackathons & Achievements */}
          <div className="space-y-6">
            <div className="border-l-2 border-brand-teal pl-4">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <Award className="w-5.5 h-5.5 text-brand-teal" /> Notable Milestones
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Competitive hacking and algorithmic accomplishments
              </p>
            </div>

            <div className="space-y-4">
              {resumeData.achievements.map((ach, idx) => (
                <motion.div
                  key={idx}
                  className="rounded-xl bg-slate-900/40 border border-slate-800/60 p-4 hover:border-amber-500/10 transition-all"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <h4 className="text-sm font-semibold text-white tracking-tight flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
                    <span>{ach.title}</span>
                  </h4>
                  <p className="text-xs text-gray-400 mt-1.5 leading-relaxed pl-3.5">
                    {ach.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications & Languages */}
          <div className="space-y-6">
            <div className="border-l-2 border-brand-teal pl-4">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <Award className="w-5.5 h-5.5 text-brand-teal" /> Certifications & Speech
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Verified industry credentials and cultural tools
              </p>
            </div>

            <div className="rounded-xl bg-slate-900/40 border border-slate-800/60 p-5 space-y-6">
              <div className="space-y-3">
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider font-semibold">
                  Certifications
                </p>
                <div className="space-y-2">
                  {resumeData.certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-brand-teal shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/60 space-y-3">
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider font-semibold">
                  Language Proficiency
                </p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {resumeData.languages.map((lang, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-850/80">
                      <p className="text-xs font-semibold text-white">{lang.name}</p>
                      <p className="text-[10px] text-brand-teal mt-0.5">{lang.level}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Let's Connect Contact Form */}
        <section id="contact" className="space-y-8 pt-12 border-t border-slate-800/60">
          <div className="border-l-2 border-brand-teal pl-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">Initiate Interview / Inquiry</h2>
            <p className="text-sm text-gray-400 mt-1">
              Send a direct secure message to Deva's inbox or grab his details
            </p>
          </div>

          <ContactForm />
        </section>

      </main>

      {/* Elegant Professional Footer */}
      <footer className="w-full bg-slate-950 border-t border-slate-900 mt-24 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-white tracking-tight">
              M DEVA PRASANNA PRINCE
            </p>
            <p className="text-xs text-slate-500 mt-1">
              AI/ML and Full-Stack Systems Engineer Candidate • Coimbatore, Tamil Nadu
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
            <a href="#about" className="hover:text-white transition-colors">Top</a>
            <span>•</span>
            <a href="#internships" className="hover:text-white transition-colors">Experience</a>
            <span>•</span>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <span>•</span>
            <a href="#contact" className="hover:text-white transition-colors">Hire Deva</a>
          </div>

          <p className="text-xs text-slate-600 font-mono">
            &copy; {new Date().getFullYear()} M Deva Prasanna Prince. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
