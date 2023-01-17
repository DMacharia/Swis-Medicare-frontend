import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { GiDoctorFace } from 'react-icons/gi'
import { MdOutlineSick } from 'react-icons/md'
import { SiShutterstock } from 'react-icons/si'
import { AiTwotoneHome } from 'react-icons/ai'
import { FiLogIn } from 'react-icons/fi'

const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);
  
    useEffect(() => {
      const handleResize = () => setScreenSize(window.innerWidth)
  
      window.addEventListener('resize', handleResize);
  
      handleResize();
  
      return () => window.removeEventListener('resize', handleResize);
    }, [])
  
    useEffect(() => {
      if(screenSize < 768) {
        setActiveMenu(false);
      } else {
        setActiveMenu(true);
      }
    }, [screenSize])


  return (
    <div className='nav-container'>
        {/* <div className='logo-container'>
            <Link style={{color: '#d9d9d9'}} to='/'>SwissMedicare</Link>
            <button className='menu-control-container'>
                Bars
            </button>
        </div> */}
        <div className='links' style={{paddingTop: '1rem'}}>
            <Link to='/'><AiTwotoneHome className='icon'/>Home</Link>
            <Link to='/doctors'><GiDoctorFace className='icon'/>Doctors</Link>
            <Link to='/patients'><MdOutlineSick className='icon'/>Patients</Link>
            <Link to='/stock'><SiShutterstock className='icon'/>Stock</Link>
            <Link to='/stock'><FiLogIn className='icon'/>Login</Link>
        </div>
    </div>
  )
}

export default Sidebar;
