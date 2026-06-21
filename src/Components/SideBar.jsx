import React, { useEffect, useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

const SideBar = () => {
  const [bottomPad, setBottomPad] = useState(0);

  useEffect(() => {
    const update = () => {
      const footer = document.getElementById('site-footer');
      if (!footer) return;
      const overlap = Math.max(0, window.innerHeight - footer.getBoundingClientRect().top);
      setBottomPad(overlap);
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <motion.div
      className='sm:flex sm:flex-col hidden z-50 fixed align-middle justify-center mx-5 w-auto pointer-events-none'
      style={{ top: 0, bottom: bottomPad }}
    >
      <a
        href="https://github.com/jahnavis2003"
        target="_blank"
        rel="noopener noreferrer"
        className='pointer-events-auto transition-transform duration-300 ease-in-out hover:scale-110 hover:text-[#71636E] text-white bg-white/10 p-2 m-3 rounded-full hover:shadow-[0px_0px_19px_rgba(113,99,110,0.9)] cursor-pointer backdrop-blur-sm'
      >
        <GitHubIcon
            className='p-1'
            sx={{
                fontSize: {
                  xs: 30,
                  sm: 30,
                  md: 40,
                },
            }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/jahnavi-siripurapu-a7290a241/"
        target="_blank"
        rel="noopener noreferrer"
        className='pointer-events-auto transition-transform duration-300 ease-in-out hover:scale-110 hover:text-[#71636E] text-white bg-white/10 p-2 m-3 rounded-full hover:shadow-[0px_0px_19px_rgba(113,99,110,0.9)] cursor-pointer backdrop-blur-sm'
      >
        <LinkedInIcon
            className='p-1'
            sx={{
                fontSize: {
                  xs: 30,
                  sm: 30,
                  md: 40,
                },
            }}
        />
      </a>
      <a
        href="https://x.com/jahnavis27"
        target="_blank"
        rel="noopener noreferrer"
        className='pointer-events-auto transition-transform duration-300 ease-in-out hover:scale-110 hover:text-[#71636E] text-white bg-white/10 p-2 m-3 rounded-full hover:shadow-[0px_0px_19px_rgba(113,99,110,0.9)] cursor-pointer backdrop-blur-sm'
      >
        <XIcon
          className='p-1'
          sx={{
              fontSize: {
                xs: 30,
                sm: 30,
                md: 40,
              },
          }}
        />
      </a>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=jsiripurapu27@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className='pointer-events-auto transition-transform duration-300 ease-in-out hover:scale-110 hover:text-[#71636E] text-white bg-white/10 p-2 m-3 rounded-full hover:shadow-[0px_0px_19px_rgba(113,99,110,0.9)] cursor-pointer backdrop-blur-sm'
      >
        <EmailIcon
          className='p-1'
          sx={{
              fontSize: {
                xs: 30,
                sm: 30,
                md: 40,
              },
          }}
        />
      </a>
    </motion.div>
  )
}

export default SideBar
