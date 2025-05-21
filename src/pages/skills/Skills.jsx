import React from 'react';
import './skills.css';
import SkillsHeader from './SkillsHeader';
const Skills = () => {
  const skillsArr = [
    'react', 'javascript', 'html', 'css', 'java', 'redux', 'bootstrap', 'tailwind-css', 'my-sql', 'node-js', 'express-js', 'dotnet-framework', 'figma', 'adobe-xd', 'github', 'git'
  ]
  return (
    <div className="relative pb-0 sm:p-14 sm:px-0 px-2 flex items-center justify-center overflow-y-auto min-h-screen scrollbar-hide">
      <SkillsHeader />
      <div className='xxl:pt-0 pt-44 sm:pt-32 xxl:h-[50vh] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 md:gap-x-[10vw] md:gap-y-[9vh] sm:mb-[7vh]'>
        {skillsArr.map((item, index) => {
          return (
            <div
              key={item}
              className={`flex flex-col items-center ${index === (skillsArr.length - 1) ? 'sm:col-start-2 md:col-start-4' : ''}`}
            >
              <div
              className={`
                ${item} 
                w-16 
                sm:w-20 
                lg:w-24 
                mx-auto 
                hover:rotate-[360deg] 
                hover:scale-110 
                transition-all 
                duration-1000          
              `}
              >
              </div>
              <p className='text-fuchsia-50 font-mono uppercase font-medium text-xs sm:text-base pt-1'>{item}</p>
            </div>
          );        
        })}
      </div>
    </div>
  )
}

export default Skills;
