import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal } from 'lucide-react';

const SkillsHeader = () => {
    const aboutRef = useRef(null);
    const isInView = useInView(aboutRef, { once: false, margin: "-100px" }); 
  return (
    <motion.div 
        ref={aboutRef}
        className="absolute top-28 left-0 right-0 flex justify-center items-center"
        initial={{ y: -20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut"  }}
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-600 to-fuchsia-400 shadow-lg">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="sm:text-2xl text-lg font-bold text-white tracking-tight text-start">
              Technical Skills
            </h1>
            <p className="text-neutral-400 sm:text-sm text-xs">
              Technologies I’ve explored and enjoyed working with.
            </p>
          </div>
        </div>
      </motion.div>
  )
}

export default SkillsHeader
