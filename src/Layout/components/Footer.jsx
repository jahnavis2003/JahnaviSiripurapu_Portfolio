import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Home, Mail, Briefcase, Code2, User, Github, Twitter, Linkedin, MapPin } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: false, margin: "-100px" }); 
  const footerRefBottom = useRef(null);
  const isInViewBottom = useInView(footerRefBottom, { once: false, margin: "-100px" }); 
  return (
    <div className="w-full bg-neutral-900/30 backdrop-blur-sm border-t border-neutral-800/40">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div 
          ref={footerRef}
          className='flex flex-col mdl:flex-row items-center justify-between'
          initial={{ y: -20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut"  }}
        >
            {/* Brand Section */}
            <div className="mdl:text-start text-center mb-8">
              <h2 className="sm:text-2xl text-xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Jahnavi Siripurapu
              </h2>
              <p className="text-neutral-400 mt-2 max-w-md mx-auto text-md sm:text-lg">
                Crafting beautiful web experiences with modern technologies and creative design solutions.
              </p>
            </div>
            {/* Social Links */}
            <div className="flex justify-center items-center gap-6 mb-8">
              <a 
                href="https://github.com/jahnavis2003" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-3xl bg-white/5 backdrop-blur-sm text-neutral-400 hover:text-fuchsia-400 transition-all duration-300 hover:bg-fuchsia-400/10 hover:scale-110 hover:shadow-[0px_0px_19px_rgba(113,99,110,0.9)]"
                aria-label="GitHub"
              >
                <Github 
                  // size={24} 
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </a>
              <a 
                href="https://x.com/jahnavis27" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-3xl bg-white/5 backdrop-blur-sm text-neutral-400 hover:text-fuchsia-400 transition-all duration-300 hover:bg-fuchsia-400/10 hover:scale-110 hover:shadow-[0px_0px_19px_rgba(113,99,110,0.9)]"
                aria-label="Twitter"
              >
                <Twitter 
                  // size={24} 
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </a>
              <a 
                href="https://www.linkedin.com/in/jahnavi-siripurapu-a7290a241/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-3xl bg-white/5 backdrop-blur-sm text-neutral-400 hover:text-fuchsia-400 transition-all duration-300 hover:bg-fuchsia-400/10 hover:scale-110 hover:shadow-[0px_0px_19px_rgba(113,99,110,0.9)]"
                aria-label="LinkedIn"
              >
                <Linkedin 
                  // size={24} 
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </a>
              <a 
                href="mailto:jsiripurapu27@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
                className="p-3 rounded-3xl bg-white/5 backdrop-blur-sm text-neutral-400 hover:text-fuchsia-400 transition-all duration-300 hover:bg-fuchsia-400/10 hover:scale-110 hover:shadow-[0px_0px_19px_rgba(113,99,110,0.9)]"
                aria-label="Email"
              >
                <Mail 
                  // size={24} 
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </a>
            </div>
        </motion.div>

        <motion.div 
          ref={footerRefBottom}
          initial={{ y: -20, opacity: 0 }}
          animate={isInViewBottom ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut"  }}
          className='flex flex-col mdl:flex-row items-center justify-between'
        >
            {/* Quick Links */}
            <nav className="flex flex-wrap justify-center gap-8 md:gap-12 mb-8">
              <a 
                href="/home" 
                className="flex items-center gap-2 text-neutral-400 hover:text-fuchsia-400 hover:underline transition-colors duration-200 text-sm sm:text-base"
              >
                <Home 
                  // size={18} 
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span>Home</span>
              </a>
              <a 
                href="/contact" 
                className="flex items-center gap-2 text-neutral-400 hover:text-fuchsia-400 hover:underline transition-colors duration-200 text-sm sm:text-base"
              >
                <Mail 
                  // size={18} 
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span>Contact</span>
              </a>
              <a 
                href="/projects" 
                className="flex items-center gap-2 text-neutral-400 hover:text-fuchsia-400 hover:underline transition-colors duration-200 text-sm sm:text-base"
              >
                <Briefcase 
                  // size={18} 
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span>Projects</span>
              </a>
              <a 
                href="/skills" 
                className="flex items-center gap-2 text-neutral-400 hover:text-fuchsia-400 hover:underline transition-colors duration-200 text-sm sm:text-base"
              >
                <Code2 
                  // size={18} 
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span>Skills</span>
              </a>
              <a 
                href="/about" 
                className="flex items-center gap-2 text-neutral-400 hover:text-fuchsia-400 hover:underline transition-colors duration-200 text-sm sm:text-base"
              >
                <User 
                  // size={18} 
                  className="w-4 h-4 sm:w-5 sm:h-5" 
                />
                <span>About</span>
              </a>
            </nav>
          {/* Contact Info */}
          <div className="text-start sm:text-sm text-xs text-neutral-500 space-y-2">
            <div className="flex items-center justify-start gap-2">
              <MapPin 
                // size={16} 
                className="text-fuchsia-400 w-4 h-4" 
              />
              <p>Hyderabad, Telangana, India</p>
            </div>
            <div className="flex items-center justify-start gap-2">
              <Mail 
                // size={16}  
                className="text-fuchsia-400 w-4 h-4" 
              />
              <p>jsiripurapu27@gmail.com</p>
            </div>
          </div>
        </motion.div >

        {/* Full-width divider */}
        <div className="w-full h-px bg-neutral-800 my-4"></div>

        {/* Copyright */}
        <div className="text-center sm:text-sm text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Jahnavi Siripurapu. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;