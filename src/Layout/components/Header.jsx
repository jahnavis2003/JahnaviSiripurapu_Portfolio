import React, { useState, useRef } from 'react';
import './header.css';
import { useLocation, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import logo from '../../Constants/Images/ava-removebg-preview.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();
  let location = useLocation();
  const navbarItems = ['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'];
  const [showHeader, setShowHeader] = useState(true);

  const lastScrollY = useRef(0);
  const isMounted = useRef(false);

  const currentPath = location.pathname;
  const active = (path) => currentPath === path;
  // console.log(currentPath);
  // Attach scroll listener directly during render (only once)
  if (typeof window !== 'undefined' && !isMounted.current) {
    isMounted.current = true;

    window.addEventListener('scroll', () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current) {
        setShowHeader(false); // scrolling down
      } else {
        setShowHeader(true);  // scrolling up
      }

      lastScrollY.current = currentY;
    });
  }
  const handleClick = (route) => {
    localStorage.setItem('navbarItemKey', route.toLowerCase());
    navigate(`/${route.toLowerCase()}`);
  }
  
  return (
    <div className={`flex md:flex-row flex-col md:justify-between items-start z-50 fixed w-full bg-black md:items-center p-3 pr-0 py-0 border-b-2 border-neutral-900 shadow-xl shadow-neutral-800/40 overflow-y-auto scrollbar-hide
      transition-transform duration-300 ${ showHeader ? 'translate-y-0' : '-translate-y-full' }
    `}>
      <div className='flex flex-row justify-between w-full overflow-y-auto scrollbar-hide'>
        <div>
          <img 
            src={logo} 
            alt="Logo" 
            className="w-[75px] h-auto cursor-pointer"
            onClick={() => {
              handleClick('home')
            }}
          />
        </div>
        <div className='overflow-y-auto scrollbar-hide'>
          <motion.div
            className='md:hidden'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, rotate: open ? 180 : 0 }} // Smooth rotation effect
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {!open && 
              <MenuIcon 
                className='m-3 cursor-pointer' 
                style={{ color: 'white', fontSize: 50 }} 
                onClick={() => setOpen(true)}
              />
            }
            {open && 
              <CloseIcon 
                className='m-3 cursor-pointer' 
                style={{ color: 'white', fontSize: 50 }} 
                onClick={() => setOpen(false)}
              />
            }
          </motion.div>
        </div>    
      </div>      
      <div className="hidden md:flex items-center">
        {navbarItems.map((item) => (
          <motion.div 
            key={item} 
            className={`
              navbar-items relative cursor-pointer
              ${active(`/${item.toLowerCase()}`)
                ? 'text-pink-100 shadow-[inset_0_-10px_10px_-5px_rgba(217,70,239,0.5),_0_10px_10px_-4px_rgba(217,70,239,0.5)]'
                : 'text-pink-100 hover:text-pink-200'
              }
              p-[35px] pt-6 pb-0 
            `}
            // initial={false}
            // transition={{
            //   type: "spring",
            //   stiffness: 400,
            //   damping: 40
            // }}
            onClick={() => handleClick(item)}
          >         
            <p className="pb-6">{item}</p>
            {active(`/${item.toLowerCase()}`) && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 border-b-4 border-fuchsia-500"
                initial={false}
                // initial={{ boxShadow: "inset 0 -10px 0px -5px rgba(217,70,239,0.0)" }}
                // animate={{
                //   boxShadow: "inset 0 -10px 10px -5px rgba(217,70,239,0.5), 0 10px 10px -4px rgba(217,70,239,0.5)",
                // }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 40
                }}
              />
            )}
          </motion.div>
        ))}
      </div>
      <div className='md:hidden w-full overflow-y-auto scrollbar-hide'>     
        {open && navbarItems.map((item) => (
          <motion.div
          key={item} 
          className={`
            navbar-items relative cursor-pointer 
            p-[20px] pt-6 pb-6 flex items-start
            ${active(`/${item.toLowerCase()}`) ? 
              'text-fuchsia-400' : 
              'text-fuchsia-100 hover:text-pink-200'
            }
          `}
            onClick={() => {
              handleClick(item)
              setOpen(false)
            }}
          >     
            <p>{item}</p>
          </motion.div>
        ))}
      </div> 
    </div>
  );
};

export default Header;