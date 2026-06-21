import React, { useState, useEffect } from 'react';
import './skills.css';
import SkillsHeader from './SkillsHeader';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const PER_PAGE = 6;

const CATEGORIES = [
  { key: 'core',     label: 'Core Stack' },
  { key: 'all',      label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend',  label: 'Backend' },
  { key: 'database', label: 'Database' },
  { key: 'design',   label: 'Design' },
  { key: 'tools',    label: 'Tools' },
];

const Grad = ({ id }) => (
  <defs>
    <linearGradient id={id} x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%"   stopColor="#1a6dff" />
      <stop offset="100%" stopColor="#c822ff" />
    </linearGradient>
  </defs>
);

const NextJsIcon = ({ size = 32 }) => (
  <svg viewBox="0 0 64 64" width={size} height={size}>
    <Grad id="nxj" />
    <circle cx="32" cy="32" r="27" fill="none" stroke="url(#nxj)" strokeWidth="2.5" />
    <path fill="url(#nxj)" d="M21 44V20h3.5l17.5 22V20H46v24h-3.5L25 22v22z" />
  </svg>
);

const ReactNativeIcon = ({ size = 32 }) => (
  <svg viewBox="0 0 64 64" width={size} height={size}>
    <Grad id="rni" />
    <rect x="18" y="3" width="28" height="58" rx="5" fill="none" stroke="url(#rni)" strokeWidth="2" />
    <circle cx="32" cy="32" r="3.5" fill="url(#rni)" />
    <ellipse cx="32" cy="32" rx="10" ry="4" fill="none" stroke="url(#rni)" strokeWidth="1.5" />
    <ellipse cx="32" cy="32" rx="10" ry="4" fill="none" stroke="url(#rni)" strokeWidth="1.5" transform="rotate(60 32 32)" />
    <ellipse cx="32" cy="32" rx="10" ry="4" fill="none" stroke="url(#rni)" strokeWidth="1.5" transform="rotate(120 32 32)" />
  </svg>
);

const MongoDBIcon = ({ size = 32 }) => (
  <svg viewBox="0 0 64 64" width={size} height={size}>
    <Grad id="mdbi" />
    {/* leaf body */}
    <path fill="url(#mdbi)" d="M32 4C32 4 15 19 15 34c0 10.5 7 19 15.5 22.5V60h3V56.5C42 53 49 44.5 49 34 49 19 32 4 32 4z"/>
    {/* centre ridge */}
    <rect x="30.5" y="14" width="3" height="36" rx="1.5" fill="white" opacity="0.15"/>
  </svg>
);

const AWSIcon = ({ size = 32 }) => (
  <svg viewBox="0 0 64 64" width={size} height={size}>
    <Grad id="awsi" />
    <path fill="none" stroke="url(#awsi)" strokeWidth="2.5" strokeLinejoin="round"
      d="M11 43 Q11 33 21 33 Q22 21 32 21 Q42 21 43 33 Q53 33 53 43 Q53 49 47 49 H17 Q11 49 11 43 Z" />
    <path fill="none" stroke="url(#awsi)" strokeWidth="2" strokeLinecap="round" d="M21 56 Q32 63 43 56" />
    <path fill="url(#awsi)" d="M40 53 L43 56 L40 59 Z" />
  </svg>
);

const SKILLS = [
  { id: 'react',            label: 'React',        category: 'Frontend', level: 90, featured: true },
  { id: 'next-js',          label: 'Next.js',      category: 'Frontend', level: 88, featured: true, Icon: NextJsIcon },
  { id: 'react-native',     label: 'React Native', category: 'Frontend', level: 82, featured: true, Icon: ReactNativeIcon },
  { id: 'java',             label: 'Java',         category: 'Backend',  level: 80, featured: true },
  { id: 'javascript',       label: 'JavaScript',   category: 'Frontend', level: 85 },
  { id: 'html',             label: 'HTML',         category: 'Frontend', level: 90 },
  { id: 'css',              label: 'CSS',          category: 'Frontend', level: 85 },
  { id: 'redux',            label: 'Redux',        category: 'Frontend', level: 70 },
  { id: 'bootstrap',        label: 'Bootstrap',    category: 'Frontend', level: 75 },
  { id: 'tailwind-css',     label: 'Tailwind CSS', category: 'Frontend', level: 85 },
  { id: 'node-js',          label: 'Node.js',      category: 'Backend',  level: 75, featured: true },
  { id: 'express-js',       label: 'Express.js',   category: 'Backend',  level: 70 },
  { id: 'dotnet-framework', label: '.NET',         category: 'Backend',  level: 65 },
  { id: 'my-sql',           label: 'MySQL',        category: 'Database', level: 70 },
  { id: 'mongodb',          label: 'MongoDB',      category: 'Database', level: 68, Icon: MongoDBIcon },
  { id: 'figma',            label: 'Figma',        category: 'Design',   level: 75 },
  { id: 'adobe-xd',         label: 'Adobe XD',     category: 'Design',   level: 65 },
  { id: 'github',           label: 'GitHub',       category: 'Tools',    level: 85 },
  { id: 'git',              label: 'Git',          category: 'Tools',    level: 85 },
  { id: 'aws',              label: 'AWS',          category: 'Tools',    level: 70, Icon: AWSIcon },
];

const levelLabel = (n) => {
  if (n >= 88) return 'Expert';
  if (n >= 78) return 'Advanced';
  if (n >= 65) return 'Intermediate';
  return 'Beginner';
};

const Skills = () => {
  const [active, setActive] = useState('core');
  const [page, setPage] = useState(1);

  useEffect(() => { setPage(1); }, [active]);

  const pool =
    active === 'core' ? SKILLS.filter(s => s.featured) :
    active === 'all'  ? SKILLS :
    SKILLS.filter(s => s.category.toLowerCase() === active);

  const filtered =
    active === 'core'
      ? pool
      : [...pool.filter(s => s.featured), ...pool.filter(s => !s.featured)];

  const totalPages  = Math.ceil(filtered.length / PER_PAGE);
  const paginated   = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const showPaging  = totalPages > 1;

  return (
    <div className="relative sm:px-14 px-4 flex flex-col items-center justify-start scrollbar-hide">
      <SkillsHeader />

      <div className="w-full max-w-2xl xl:max-w-3xl mt-60 sm:mt-56 pb-24 flex flex-col gap-8">

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center">
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 ${
                active === cat.key
                  ? 'text-white'
                  : 'text-neutral-400 hover:text-neutral-200 border border-neutral-700 hover:border-neutral-500'
              }`}
            >
              {active === cat.key && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-fuchsia-600"
                  style={{ zIndex: -1 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill rows */}
        <div className="flex flex-col gap-3">
          <AnimatePresence mode="popLayout">
            {paginated.map((skill, i) => {
              const SkillIcon = skill.Icon ?? null;
              return (
                <motion.div
                  key={skill.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: i * 0.05, duration: 0.3 } }}
                  exit={{ opacity: 0, x: -20, transition: { duration: 0.15 } }}
                  className={`relative group flex items-center gap-4 px-4 py-3.5 rounded-2xl border transition-all duration-300 overflow-hidden ${
                    skill.featured
                      ? 'bg-neutral-900/60 border-neutral-700/60 hover:border-neutral-600 hover:bg-neutral-900/80'
                      : 'bg-neutral-900/40 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/60'
                  }`}
                >
                  {/* Left accent bar for featured */}
                  {skill.featured && (
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-fuchsia-500/50 rounded-l-2xl" />
                  )}

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {SkillIcon
                      ? <SkillIcon size={26} />
                      : <div className={skill.id} style={{ width: 26, height: 26 }} />
                    }
                  </div>

                  {/* Name + category — fixed width so bars align */}
                  <div className="w-28 sm:w-36 flex-shrink-0">
                    <p className="font-semibold text-sm leading-tight text-neutral-100">
                      {skill.label}
                    </p>
                    <p className="text-neutral-500 text-xs mt-0.5">{skill.category}</p>
                  </div>

                  {/* Progress bar */}
                  <div className="flex-1 flex flex-col gap-1 min-w-0">
                    <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-fuchsia-600 to-fuchsia-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: i * 0.05 + 0.15, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                      />
                    </div>
                    <p className="text-neutral-600 text-[10px] font-mono">{levelLabel(skill.level)}</p>
                  </div>

                  {/* Percentage + star */}
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <span className="text-sm font-medium font-mono tabular-nums text-neutral-400">
                      {skill.level}%
                    </span>
                    {skill.featured && (
                      <Star className="w-3 h-3 fill-neutral-600 text-neutral-600" />
                    )}
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {showPaging && (
          <div className="flex items-center justify-between">
            <p className="text-neutral-600 text-xs font-mono">
              {(page - 1) * PER_PAGE + 1}–{Math.min(page * PER_PAGE, filtered.length)} of {filtered.length}
            </p>

            <div className="flex items-center gap-1.5">
              {/* Prev */}
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-neutral-800 text-neutral-400 hover:border-fuchsia-500/50 hover:text-fuchsia-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`relative w-8 h-8 flex items-center justify-center rounded-lg text-xs font-mono font-medium transition-all duration-200 ${
                    n === page
                      ? 'text-white'
                      : 'text-neutral-400 hover:text-neutral-200 border border-neutral-800 hover:border-neutral-600'
                  }`}
                >
                  {n === page && (
                    <motion.span
                      layoutId="page-pill"
                      className="absolute inset-0 rounded-lg bg-fuchsia-600"
                      style={{ zIndex: -1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {n}
                </button>
              ))}

              {/* Next */}
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-neutral-800 text-neutral-400 hover:border-fuchsia-500/50 hover:text-fuchsia-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Skills;
