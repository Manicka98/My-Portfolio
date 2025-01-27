import React from 'react'
import '../Navbar/nav.css';
import{ Link } from 'react-scroll';
import Home from '../Home/Home.1';



function Nav() {
  return (
  <>
  <div className='navbar'>
    <div className='logo'><h1><span>M</span>anick <span>P</span>ortfolio</h1></div>
    <div className='navlist'>
        <Link to="home" smooth={true} duration={500}>
            <h4>Home</h4>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
            <h4>Skills</h4>
        </Link>
        <Link to="project" smooth={true} duration={500}>
            <h4>Project</h4>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
            <h4>Contact</h4>
        </Link>
    </div>

  </div>
  </>
  )
}

export default Nav