import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const Controls = ({ 
  handleNext, 
  handleBack, 
  totalProjects,
  currentIndex 
}) => {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-6">
      <div className="flex gap-3 items-center">
        {Array.from({ length: totalProjects }).map((_, index) => (
          <motion.div 
            key={index}
            className={`h-1.5 rounded-full bg-neutral-600 transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-white' : 'w-2'
            }`}
            initial={{ opacity: 0.5, scale: 0.8 }}
            animate={{ 
              opacity: index === currentIndex ? 1 : 0.5,
              scale: index === currentIndex ? 1 : 0.8,
              transition: { duration: 0.3 }
            }}
          />
        ))}
      </div>
      <div className="flex items-center gap-6">
        <ControlButton
          direction="prev"
          onClick={handleBack}
          icon={<ChevronLeft className="w-5 h-5" />}
        />
        <ControlButton
          direction="next"
          onClick={handleNext}
          icon={<ChevronRight className="w-5 h-5" />}
        />
      </div>
    </div>
  );
};

const ControlButton = ({ direction, onClick, icon }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="w-12 h-12 rounded-full backdrop-blur-lg bg-neutral-800/70 text-white flex items-center justify-center border border-neutral-700 shadow-lg"
      aria-label={direction === 'prev' ? 'Previous project' : 'Next project'}
    >
      {icon}
      <motion.div
        className="absolute inset-0 bg-neutral-700/30 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default Controls;