import { motion } from "motion/react";
import profilePhoto from "../DEVA.png";

export default function InteractivePhoto() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[340px] mx-auto animate-float">
      <motion.div
        id="interactive-photo-frame"
        className="relative w-full aspect-square rounded-3xl overflow-hidden border-2 border-amber-500/40 bg-slate-900/60 shadow-[0_0_40px_rgba(212,134,10,0.2)] group"
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Shimmer light bar effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-10" />

        {/* Subtle glow ring */}
        <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-amber-400/10 pointer-events-none z-10" />

        {/* Profile Photo */}
        <img
          src={profilePhoto}
          alt="M Deva Prasanna Prince"
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none z-10" />
      </motion.div>

    </div>
  );
}
