import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ['Full Stack Developer', 'Designer', 'Creator', 'Problem Solver'];

const Attributes = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % words.length);
      }, 3000);
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div className="h-10 overflow-hidden sm:text-2xl text-xl text-fuchsia-400 mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={words[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {words[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    );
};

export default Attributes;