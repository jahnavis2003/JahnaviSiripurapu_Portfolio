import React from 'react'
import { Routes } from 'react-router';
import { Route } from "react-router-dom";
import About from '../pages/about/About';
import Home from '../pages/home/Home';
import Layout from '../Layout/Layout';
import Skills from '../pages/skills/Skills';
import Projects from '../pages/projects/Projects';
import Contact from '../pages/contact/Contact';
import NotFound from '../pages/Misc/PageNotFound';
import { Navigate } from 'react-router';
// import Fun from '../pages/interactions/Fun';


const Routing = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="skills" element={<Skills />}/>
          <Route path="projects" element={<Projects />}/>
          <Route path="contact" element={<Contact />}/>
          {/* <Route path="fun" element={<Fun />}/> */}
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
  )
}

export default Routing;
