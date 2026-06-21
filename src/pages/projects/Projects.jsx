import React, { useState } from "react";
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import projectData  from '../../Constants/PROJECT_DATA.json';
import Controls from './Controls';
import ProjectsHeader from './ProjectsHeader';
import useKeyboardNavigation from './hooks/useKeyboardNavigation';
import useTouchSwipe from './hooks/useTouchSwipe';

const positions = [
  "center", "left", "left1", "left2", "left3", 
  "right3", "right2", "right1", "right"
];

const imageVariants = {
  center: { x: "0%",    y: "-50%", scale: 1,    zIndex: 9, opacity: 1,   filter: "brightness(1)"   },
  left:   { x: "-45%",  y: "-50%", scale: 0.85, zIndex: 8, opacity: 0.9, filter: "brightness(0.7)" },
  left1:  { x: "-75%",  y: "-50%", scale: 0.6,  zIndex: 7, opacity: 0.7, filter: "brightness(0.5)" },
  left2:  { x: "-95%",  y: "-50%", scale: 0.4,  zIndex: 6, opacity: 0.5, filter: "brightness(0.4)" },
  left3:  { x: "-105%", y: "-50%", scale: 0.25, zIndex: 5, opacity: 0.3, filter: "brightness(0.3)" },
  right3: { x: "105%",  y: "-50%", scale: 0.25, zIndex: 5, opacity: 0.3, filter: "brightness(0.3)" },
  right2: { x: "95%",   y: "-50%", scale: 0.4,  zIndex: 6, opacity: 0.5, filter: "brightness(0.4)" },
  right1: { x: "75%",   y: "-50%", scale: 0.6,  zIndex: 7, opacity: 0.7, filter: "brightness(0.5)" },
  right:  { x: "45%",   y: "-50%", scale: 0.85, zIndex: 8, opacity: 0.9, filter: "brightness(0.7)" },
};

const Projects = () => {
  const [positionIndexes, setPositionIndexes] = useState(() => {
    const n = projectData.length;
    // center=0, left side=wrap-around tail, right side=upcoming projects
    return [0, n - 1, n - 2, n - 3, n - 4, 4, 3, 2, 1];
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % projectData.length
      );
      return updatedIndexes;
    });
    setCurrentIndex((prev) => (prev + 1) % projectData.length);
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex - 1 + projectData.length) % projectData.length
      );
      return updatedIndexes;
    });
    setCurrentIndex((prev) => (prev - 1 + projectData.length) % projectData.length);
  };

  useKeyboardNavigation({ handleNext, handleBack });
  const { onTouchStart, onTouchEnd } = useTouchSwipe({ handleNext, handleBack });

  // If no projects or positions aren't initialized yet, show loading state
  if (projectData.length === 0 || positionIndexes.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-black to-neutral-900">
        <div className="animate-pulse text-white text-xl">Loading projects...</div>
      </div>
    );
  }

  return (
    <motion.div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-black overflow-y-auto overflow-x-hidden font-sans">
      <ProjectsHeader /> 
      <div
        className="flex items-center justify-center"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Background glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl" />

        {projectData.map((project, dataIndex) => {
          const positionIndex = positionIndexes.findIndex(index => index === dataIndex);
          // If this project is not in the current view, don't render it
          if (positionIndex === -1) return null;
          
          return (
            <ProjectCard
              key={project.id}
              project={project}
              position={positions[positionIndex]}
              imageVariants={imageVariants}
            />
          );
        })}
      </div>
      
      {/* Navigation controls */}
      <Controls 
        handleNext={handleNext}
        handleBack={handleBack}
        totalProjects={projectData.length}
        currentIndex={currentIndex}
      />
    </motion.div>
  );
};

export default Projects;