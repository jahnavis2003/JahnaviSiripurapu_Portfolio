import React from 'react'
import { Outlet } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import './layout.css';
import SideBar from '../Components/SideBar';

const Layout = () => {
  return (
    <div className='layout relative'>
      <Header />
      <SideBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
