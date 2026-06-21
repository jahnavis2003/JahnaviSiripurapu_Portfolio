import React, { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { MapPin, Calendar, ChevronDown, Briefcase, Building2 } from 'lucide-react';
import { useRef } from 'react';
import CareerHeader from './CareerHeader';
import careerData from '../../Constants/CAREER_DATA.json';

const TypeBadge = ({ type }) => {
  const colors = {
    'Full-time':  'bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30',
    'Internship': 'bg-purple-500/15 text-purple-300 border-purple-500/30',
    'Contract':   'bg-pink-500/15   text-pink-300   border-pink-500/30',
    'Part-time':  'bg-violet-500/15 text-violet-300 border-violet-500/30',
  };
  return (
    <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${colors[type] || colors['Full-time']}`}>
      {type}
    </span>
  );
};

const CareerCard = ({ item, index, isLeft, defaultOpen }) => {
  const [open, setOpen] = useState(defaultOpen);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-60px' });

  return (
    <div className="relative flex items-start justify-center w-full">

      {/* ── Desktop centre dot ── */}
      <div className="absolute left-1/2 -translate-x-1/2 top-6 z-10 hidden md:flex items-center justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.2, duration: 0.4 }}
          className="w-3.5 h-3.5 rounded-full bg-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.7)] border-2 border-fuchsia-300"
        />
      </div>

      {/* ── Mobile left dot ── */}
      <div className="absolute left-4 top-6 z-10 flex md:hidden items-center justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.2, duration: 0.4 }}
          className="w-3 h-3 rounded-full bg-fuchsia-500 shadow-[0_0_8px_rgba(217,70,239,0.7)] border-2 border-fuchsia-300"
        />
      </div>

      {/* ── Card ── */}
      <div className={`w-full md:w-[46%] pl-10 md:pl-0 ${isLeft ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'}`}>
        <motion.div
          ref={ref}
          initial={{ x: isLeft ? -40 : 40, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: index * 0.15, duration: 0.5, ease: 'easeOut' }}
          className="bg-neutral-950/70 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-colors duration-300 backdrop-blur-sm"
        >
          {/* ── Always-visible summary row ── */}
          <button
            onClick={() => setOpen(o => !o)}
            className="w-full text-left px-5 py-4 flex items-start justify-between gap-3 group"
          >
            <div className="flex-1 min-w-0">
              {/* Role + badge */}
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="text-white font-bold text-sm sm:text-base leading-tight">
                  {item.role}
                </h3>
                <TypeBadge type={item.type} />
              </div>

              {/* Company */}
              <p className="text-fuchsia-400 font-semibold text-sm">
                {item.company}
              </p>

              {/* Meta row */}
              <div className="flex flex-wrap gap-3 mt-2 text-neutral-500 text-xs">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-fuchsia-600" />
                  {item.start} – {item.end}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-fuchsia-600" />
                  {item.location}
                </span>
                {item.mode && (
                  <span className="flex items-center gap-1">
                    <Building2 className="w-3 h-3 text-fuchsia-600" />
                    {item.mode}
                  </span>
                )}
              </div>
            </div>

            {/* Chevron */}
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="flex-shrink-0 mt-0.5"
            >
              <ChevronDown className="w-4 h-4 text-neutral-500 group-hover:text-neutral-300 transition-colors duration-200" />
            </motion.div>
          </button>

          {/* ── Expandable detail ── */}
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="detail"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 border-t border-neutral-800/80">
                  {/* Description */}
                  <ul className="mt-4 space-y-2 mb-4">
                    {item.description.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ x: -8, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.06, duration: 0.25 }}
                        className="flex items-start gap-2.5 text-neutral-300 text-xs sm:text-sm"
                      >
                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-fuchsia-500 flex-shrink-0" />
                        {point}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tech_stack.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: i * 0.04 + 0.1, duration: 0.2 }}
                        className="text-xs px-2.5 py-1 rounded-lg bg-neutral-900 text-neutral-400 border border-neutral-800 font-mono"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

const Career = () => {
  return (
    <div className="relative flex flex-col items-center justify-start sm:px-14 px-4 py-0 scrollbar-hide">
      <CareerHeader />

      <div className="w-full max-w-5xl mt-60 sm:mt-56 pb-24 px-4 sm:px-0">

        {/* Desktop timeline centre line */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-60 bottom-24 w-px bg-gradient-to-b from-fuchsia-500/60 via-fuchsia-500/20 to-transparent pointer-events-none" />

        {/* Mobile timeline left line */}
        <div className="md:hidden absolute left-[1.35rem] top-60 bottom-24 w-px bg-gradient-to-b from-fuchsia-500/60 via-fuchsia-500/20 to-transparent pointer-events-none" />

        <div className="flex flex-col gap-8 sm:gap-10">
          {careerData.map((item, index) => (
            <CareerCard
              key={item.id}
              item={item}
              index={index}
              isLeft={index % 2 === 0}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
