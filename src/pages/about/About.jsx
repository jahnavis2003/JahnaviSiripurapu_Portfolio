import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import AboutHeader from './AboutHeader';

const Hi = ({ children }) => (
  <span className="text-fuchsia-400 font-medium">{children}</span>
);

const Para = ({ children, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  return (
    <motion.p
      ref={ref}
      initial={{ y: 22, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ delay: index * 0.08, duration: 0.55, ease: "easeOut" }}
      className="text-neutral-300 text-sm sm:text-base leading-7 sm:leading-8"
    >
      {children}
    </motion.p>
  );
};

const AboutMe = () => {
  const calloutRef = useRef(null);
  const isCalloutInView = useInView(calloutRef, { once: true, margin: "0px" });

  return (
    <div className="relative flex flex-col items-center justify-start px-5 sm:px-14 scrollbar-hide">
      <AboutHeader />

      <div className="w-full max-w-3xl xl:max-w-5xl mt-60 sm:mt-56">

        {/* Decorative opening quote */}
        <div className="text-[9rem] sm:text-[11rem] leading-[0.7] text-fuchsia-500/15 font-serif select-none mb-6">
          "
        </div>

        <div className="flex flex-col gap-6 sm:gap-7">

          <Para index={0}>
            <Hi>Curiosity</Hi> has been the driving force behind my journey in technology. What began as an interest in understanding how software works gradually evolved into a{' '}
            <Hi>passion for building products</Hi> that solve real-world problems and create meaningful experiences for users.
          </Para>

          <Para index={1}>
            I am someone who enjoys{' '}
            <Hi>learning, experimenting, and continuously expanding my horizons</Hi>. Whether it's exploring a new framework, understanding the architecture behind a complex system, or diving into advancements in{' '}
            <Hi>artificial intelligence</Hi>, I am constantly seeking opportunities to grow and challenge myself. I find immense satisfaction in transforming ideas into tangible products and enjoy every stage of the process, from conceptualization and design to development and deployment.
          </Para>

          <Para index={2}>
            With <Hi>over 2 years of professional experience in software development</Hi>, I have had the opportunity to build impactful features, enhance products, and lead key product development initiatives while continuously learning and adapting to new technologies and challenges.
          </Para>

          <Para index={3}>
            Beyond technology, I believe that{' '}
            <Hi>personal growth extends far beyond the screen</Hi>. I enjoy reading books that broaden my perspective, challenge my thinking, and expose me to new ideas. I am also passionate about{' '}
            <Hi>fitness and maintaining an active lifestyle</Hi>. Regular strength training, running, and other physical activities have taught me{' '}
            <Hi>discipline, consistency, and resilience</Hi>—qualities that I carry into my professional life as well.
          </Para>

          <Para index={4}>
            I value <Hi>continuous improvement</Hi>, whether it involves refining a piece of code, learning a new skill, improving my physical endurance, or gaining a deeper understanding of the world around me. This mindset of{' '}
            <Hi>lifelong learning and self-development</Hi> has shaped both my personal and professional journey.
          </Para>

          {/* Closing callout */}
          <motion.div
            ref={calloutRef}
            initial={{ y: 22, opacity: 0 }}
            animate={isCalloutInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.12, duration: 0.55, ease: "easeOut" }}
            className="border-l-[3px] border-fuchsia-500 pl-5 py-1"
          >
            <p className="text-fuchsia-100 text-sm sm:text-base leading-7 sm:leading-8 italic">
              As I continue to grow, my goal is to build{' '}
              <span className="not-italic font-semibold text-fuchsia-300">impactful products</span>, contribute to{' '}
              <span className="not-italic font-semibold text-fuchsia-300">meaningful innovations</span>, and remain a{' '}
              <span className="not-italic font-semibold text-fuchsia-300">curious learner</span>{' '}
              who is always eager to explore, create, and evolve.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default AboutMe;
