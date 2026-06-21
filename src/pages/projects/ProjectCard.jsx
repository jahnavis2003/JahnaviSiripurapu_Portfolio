import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Globe, Apple, PlayCircle, FileText } from 'lucide-react';

const ProjectCard = ({ project, position, imageVariants }) => {
  // console.log('tech_stack:', project.tech_stack); 
  return (
    <motion.div
      className="rounded-2xl overflow-hidden overflow-y-auto max-h-[80vh] h-[50vh] bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 p-6 backdrop-blur-lg text-white shadow-xl scrollbar-hide"
      initial={position}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        mass: 1
      }}
      style={{ 
        width: "clamp(280px, 80vw, 600px)", 
        position: "absolute",
        boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.05) inset"
      }}
      animate={position}
      variants={imageVariants}
    >
      <div className="relative flex flex-col items-center justify-between h-full">
        <div className="absolute -top-2 -right-2 h-2 w-2 bg-emerald-400 rounded-full animate-pulse" />
        <h1 className="sm:text-2xl text-lg font-bold mb-3 tracking-tight">{project.project_name}</h1>
        <p className="text-neutral-300 mb-5 leading-relaxed text-sm sm:text-base">{project.description}</p>
        
        <div className="flex items-center mb-4 gap-2">
          <div className="h-0.5 w-4 bg-fuchsia-500/70" />
          <p className="font-medium sm:text-sm text-xs tracking-wide text-neutral-400">TECH STACK</p>
        </div>
        <div className='flex flex-wrap'>
          {project.tech_stack.map((stack, index) => (
              <p key={index} className="text-fuchsia-400 font-mono sm:text-sm text-xs mb-6 bg-fuchsia-600/10 p-2 mr-2 rounded-full hover:bg-fuchsia-600/15 transition-transform duration-600 ease-in-out hover:scale-105">{stack}</p>
          ))}
        </div>

        {/* <p className="text-fuchsia-400 font-mono text-sm mb-6">{project.tech_stack}</p> */}
        
        <div className="space-y-3 w-full sm:pb-0 pb-5">
          {project.github_link && (
            <LinkItem icon="github" label="GitHub" url={project.github_link} />
          )}
          {project.url && (
            <LinkItem icon="demo" label="Live Website" url={project.url} />
          )}
          {project.marketing_site && (
            <LinkItem icon="demo" label="Marketing Site" url={project.marketing_site} />
          )}
          {project.web_app_link && (
            <LinkItem icon="demo" label="Web App" url={project.web_app_link} />
          )}
          {project.app_store_link && (
            <LinkItem icon="appstore" label="App Store" url={project.app_store_link} />
          )}
          {project.play_store_link && (
            <LinkItem icon="playstore" label="Play Store" url={project.play_store_link} />
          )}
          {(project.paper_link && project.extra_info) && (
            <LinkItem icon="paper" label={`Research Paper: ${project.extra_info}`} url={project.paper_link} />
          )}
        </div>
      </div>
    </motion.div>
  );
};

const LinkItem = ({ icon, label, url }) => {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer" 
      className="flex items-center gap-2 p-2.5 bg-neutral-800/70 rounded-lg hover:bg-neutral-700/70 transition-colors group"
    >
      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
        {icon === 'github'    && <Github    className="w-4 h-4 text-neutral-300" />}
        {icon === 'demo'      && <Globe     className="w-4 h-4 text-neutral-300" />}
        {icon === 'appstore'  && <Apple     className="w-4 h-4 text-neutral-300" />}
        {icon === 'playstore' && <PlayCircle className="w-4 h-4 text-neutral-300" />}
        {icon === 'paper'     && <FileText  className="w-4 h-4 text-neutral-300" />}
      </div>
      <span className="sm:text-sm text-xs text-neutral-200 text-wrap text-start">{label}</span>
      <ArrowUpRight 
        className="ml-auto sm:w-4 sm:h-4 w-3 h-3 text-neutral-400 group-hover:text-white transition-colors flex-shrink-0" 
      />
    </a>
  );
};

export default ProjectCard;