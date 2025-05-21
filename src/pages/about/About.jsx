import React from 'react'
import { motion } from 'framer-motion';
import AboutHeader from './AboutHeader';


const AboutMe = () => {
  return (
    <motion.div 
      className='relative flex flex-col items-center justify-center min-h-screen sm:p-14 py-0 scrollbar-hide'
    >
      <AboutHeader />
      <div className='xxl:h-[70vh] pt-44 sm:pt-32 xxl:pt-0'>
        <p className='text-fuchsia-100 text-sm sm:text-2xl sm:p-10 p-2 text-center whitespace-pre-line'>
        {`Passionate tech enthusiast with over a year of professional experience in software development, complemented by hands-on exposure to AI integrations. Driven by curiosity and a constant desire to innovate, I enjoy building impactful solutions that blend functionality with emerging technologies. My journey began during my undergraduate studies at Mahindra University, Hyderabad where I majored in Computer Science. My coursework included Deep Learning, Cryptography & Network Security, Machine Learning with Python, Optimization Techniques for AI, Discrete Mathematics, Data Structures, Operating Systems, Database Management Systems, Object-Oriented Programming, Big Data, NLP, and Distributed Systems, among others. In my third year of college, I discovered my passion for development and started building small-scale websites such as a weather forecast site, a Netflix-inspired streaming platform, and a food delivery website. In my final year, I transitioned into mobile app development and worked on an AI-integrated app offering personalized features.
        \n My skills deepened during an internship in my final semester, where I focused on frontend development using modern tech stacks. During this time, I worked on a variety of projects, starting with a Game of Craps website built with React.js, featuring detailed rules and interactivity. I then developed a CRUD-based employee data tracking application and an E-commerce platform with role-based authorization and user authentication. Following this, I built a Kanban application for task management, similar to a ticketing system, and an AI-powered chatbot called 1stAskHR, which supported multi-tenancy to cater to different user groups and leveraged AI to address HR-related questions tied to employee documents. Lastly, I created a Resume Data Management application, streamlining the storage and management of candidate resumes for the company which was a full stack application, I used .NET framework and MVC to build it. 
        \n Currently working as Member Technical at ADP, Hyderabad, where I continue to enhance my skills and contribute to impactful, real-world projects. I am deeply passionate about learning new technologies and tackling complex problems. With a strong drive for growth and a collaborative mindset, I strive to be a valuable asset to any team I join, while continuously expanding my knowledge and capabilities.`}
        </p>
      </div>
      
    </motion.div>
  )
}

export default AboutMe;
