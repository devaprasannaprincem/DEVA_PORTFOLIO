import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Variants } from "motion/react";
import { Github, Cpu, Database, Eye, Terminal, ChevronDown, ChevronUp } from "lucide-react";
import { Project } from "../resumeData.js";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.88,
    y: -20,
    transition: { duration: 0.28, ease: "easeIn" },
  },
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getIcon = () => {
    const title = project.title.toLowerCase();
    if (title.includes("wonderly") || title.includes("edtech"))
      return <Cpu className="w-5 h-5 text-amber-400" />;
    if (title.includes("legal") || title.includes("simplifying"))
      return <Database className="w-5 h-5 text-cyan-400" />;
    if (title.includes("resume") || title.includes("screening"))
      return <Terminal className="w-5 h-5 text-emerald-400" />;
    if (title.includes("neurosync") || title.includes("eeg"))
      return <Eye className="w-5 h-5 text-violet-400" />;
    return <Eye className="w-5 h-5 text-indigo-400" />;
  };

  return (
    <motion.div
      id={`project-card-${index}`}
      layout
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{ y: -7, transition: { duration: 0.22, ease: "easeOut" } }}
      className="rounded-2xl bg-slate-900/40 border border-slate-800/80 p-5 relative overflow-hidden group flex flex-col justify-between"
      style={{ willChange: "transform" }}
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-amber-500/8 via-transparent to-cyan-500/5" />

      {/* Animated glow blob */}
      <motion.div
        className="absolute -top-8 -right-8 w-40 h-40 bg-amber-500/8 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.6 }}
      />

      {/* Shimmer sweep on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-900 ease-out pointer-events-none" />

      {/* Top accent line that grows on hover */}
      <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-brand-cyan to-brand-teal transition-all duration-500 ease-out rounded-t-2xl" />

      <div>
        {/* Card Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800/60 flex items-center justify-center shrink-0"
              whileHover={{ rotate: [0, -12, 12, -6, 0], transition: { duration: 0.5 } }}
              whileTap={{ scale: 0.9 }}
            >
              {getIcon()}
            </motion.div>
            <div>
              <h3 className="font-semibold text-[16px] text-white tracking-tight group-hover:text-brand-cyan transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-xs text-brand-teal font-medium mt-0.5">{project.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 ml-2">
            {project.githubUrl && (
              <motion.a
                id={`project-github-${index}`}
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-amber-500/50 text-gray-400 hover:text-white transition-all cursor-pointer"
                title="View GitHub Repository"
                whileHover={{ scale: 1.2, rotate: 8 }}
                whileTap={{ scale: 0.85 }}
              >
                <Github className="w-4 h-4" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Tags with stagger */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.map((tag, tIdx) => (
            <motion.span
              id={`project-${index}-tag-${tIdx}`}
              key={tIdx}
              initial={{ opacity: 0, scale: 0.8, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 + tIdx * 0.04, duration: 0.3, ease: "backOut" }}
              whileHover={{ scale: 1.1, y: -2, transition: { duration: 0.15 } }}
              className="text-[10.5px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-950 border border-slate-800/80 text-amber-300/90 cursor-default hover:border-amber-500/50 hover:text-amber-200 transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Description bullets with animated reveal */}
        <div className="mt-4 space-y-2">
          <AnimatePresence initial={false}>
            {project.bullets.slice(0, isExpanded ? undefined : 2).map((bullet, bIdx) => (
              <motion.p
                key={bIdx}
                initial={{ opacity: 0, x: -14, height: 0 }}
                animate={{ opacity: 1, x: 0, height: "auto" }}
                exit={{ opacity: 0, x: -10, height: 0 }}
                transition={{ duration: 0.3, delay: bIdx * 0.06, ease: "easeOut" }}
                className="text-xs text-gray-400 leading-relaxed flex items-start gap-2 overflow-hidden"
              >
                <motion.span
                  className="text-brand-teal select-none mt-1 shrink-0"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: bIdx * 0.4 }}
                >
                  •
                </motion.span>
                <span>{bullet}</span>
              </motion.p>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer: expand toggle + category badge */}
      <div className="mt-5 pt-3 border-t border-slate-800/50 flex items-center justify-between">
        <motion.button
          id={`btn-project-expand-${index}`}
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
          whileTap={{ scale: 0.93 }}
        >
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.span
                key="less"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.18 }}
                className="flex items-center gap-1"
              >
                <span>Show Less</span>
                <ChevronUp className="w-3.5 h-3.5" />
              </motion.span>
            ) : (
              <motion.span
                key="more"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.18 }}
                className="flex items-center gap-1"
              >
                <span>Show Detailed Milestones</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        <motion.span
          className="text-[10px] font-mono text-gray-500 bg-slate-950 px-2 py-0.5 rounded-full border border-slate-800/60 uppercase"
          whileHover={{ scale: 1.06, borderColor: "rgba(20,184,166,0.3)" }}
          transition={{ duration: 0.15 }}
        >
          {project.category.replace("_", " ")}
        </motion.span>
      </div>
    </motion.div>
  );
}
