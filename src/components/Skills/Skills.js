import React from 'react'
import { Element } from 'react-scroll'
import '../Skills/skills.css';
import { MdOutlineHtml } from "react-icons/md";
import { SiCsswizardry } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { TbBrandDjango } from "react-icons/tb";
import { SiPython } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { VscRadioTower } from 'react-icons/vsc';


function Skills() {
  return (
    <Element  id='Skills' name='skills' className='skillmain'>
      <div>
                <div className='skilllogo'><h1> <span >My</span>Skills</h1></div>
      </div>
        
        <div className='skillcontainer'>
            <div className='skills'> Skills
              <h2>Language</h2>
              <p>
                Python
              </p>
              <h2 bg>Web Technologies</h2>
              <p>
                 HTML
                 CSS 
                 Javascript
              </p>
              <h2>Frame Works </h2>
              <p>
              Bootstrap, Django, Reactjs 
              </p>
              <h2>Database</h2>
              <p>
                SQL
              </p>
              <h2>Version Control</h2>
              <p>
              GitTools
              </p>


            </div>

            <div className='skillgroup'>
              <div className='skillbox'>
                   <h1><MdOutlineHtml /></h1>
                   <h1><SiCsswizardry /></h1>
                   <h1><SiJavascript /></h1>
              </div>

              <div className='skillbox'>
                    <h1><FaSass /></h1>
                    <h1><FaBootstrap /></h1>
                    <h1><SiPython /></h1>
              </div>
              
              <div className='skillbox'>
                    <h1><FaReact /></h1>
                    <h1><TbBrandDjango /></h1>
                    <h1><AiOutlineConsoleSql /></h1>
              </div>
             
            </div>
        </div>
            
            
            
      
    </Element>
    
  )
}

export default Skills