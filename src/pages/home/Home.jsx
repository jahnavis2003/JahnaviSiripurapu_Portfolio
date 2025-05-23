import React from 'react';
import { Download, Github } from 'lucide-react';
import './home.css';
import JanAvatar from '../../Constants/Images/avatar_cropped6.png';
import JanAvatarBg from '../../Constants/Images/avatar_bg5.png';
import AboutMe from '../about/About';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Attributes from '../../Components/Attributes';
const Home = () => {
  return (
    <div className='flex flex-col min-h-screen overflow-x-hidden'>
      <motion.div 
        className='flex flex-col-reverse w-full sm:flex-row items-center justify-center h-screen pt-10 md:pt-0 '
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className='flex md:flex-row flex-col max-w-full items-center md:justify-between justify-center md:pt-0 sm:pt-20 sm:pb-0 pt-16 sm:px-5'>
          <div className="relative w-fit sm:p-0 p-5">
            <img src={JanAvatarBg} alt="Jahnavi Avatar Bg" className="w-full"/>
            <img src={JanAvatar} alt="Jahnavi Avatar" className="absolute lg:-top-5 md:-top-[0.8em] sm:-top-[20px] xs:-top-[32px] -top-[23px]  left-0" style={{ height: "auto", width: "150%" }} />
          </div>
          <div className='text-fuchsia-50 m-3 xl:mr-0 xl:mx-52 sm:mr-0 sm:mx-10 text-center'>
            <div className="xl:text-6xl lg:text-5xl mdl:text-4xl md:text-3xl text-3xl md:tracking-[0px] tracking-[1px] leading-snug">
              <div>
                <Typewriter
                  words={["I'm Jahnavi Siripurapu,"]}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                />
              </div>
            </div>
            <p className='text-center xl:text-6xl lg:text-5xl mdl:text-3xl md:text-2xl text-xl mdl:tracking-[50px] md:tracking-[10px] tracking-[30px] m-2 font-bold sm:mt-10 mt-7'>
              CREATIV<span className="tracking-normal">E</span>
            </p>
            <p className='text-center xl:text-6xl lg:text-4xl mdl:text-2xl md:text-xl text-xl mdl:tracking-[20px] md:tracking-[5px] tracking-[20px] m-3 font-thin'>  
              Develope<span className="tracking-normal">r</span>
            </p>
            <Attributes className='pt-20'/>
            <div className='flex flex-col mdl:flex-row items-center gap-2 justify-center mt-10'>
              <button 
                className='buttonStyle flex items-center justify-center gap-2 p-2 md:m-3 lg:w-1/3 sm:w-full w-80 rounded-lg sm:text-lg text-sm xl:text-xl bg-[#71636E] hover:bg-[#7c6076] hover:shadow-[_0_11px_11px_-5px_rgba(113,99,110,0.7)] transition-all duration-300 hover:scale-110'
                onClick={() => {
                  const pdfUrl = `${process.env.PUBLIC_URL}/Files/JahnaviS_Resume.pdf`; // Update with actual path
                  const link = document.createElement('a');
                  link.href = pdfUrl;
                  link.download = 'JahnaviS_Resume.pdf'; // Change filename if needed
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                My Resume
              </button>
              <a 
                href="https://github.com/jahnavis2003"
                target="_blank"
                rel="noopener noreferrer"
                className='buttonStyle p-2 md:m-3 rounded-lg lg:w-1/3 sm:w-full w-80 xl:text-xl sm:text-lg text-sm flex items-center justify-center gap-2 border-2 border-[#71636E] hover:bg-[#71636e3f] hover:shadow-[_0_11px_11px_-5px_rgba(113,99,110,0.7)] transition-all duration-300 hover:scale-110'
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                GitHub
              </a>
            </div>    
          </div>
        </div>
      </motion.div> 
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>

  )
}

export default Home
