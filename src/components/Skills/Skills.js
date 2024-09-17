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
                <div className='skilllogo'><h3> <span >My</span>Skills</h3></div>
      </div>
        
        <div className='skillcontainer'>
            <div> Skills
              <h2>Language</h2>
              <p>
                Python
              </p>
              <h2>Web Technologies</h2>
              <p>
                `HTML
                 CSS 
                 Javascript`
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
                   <h4><MdOutlineHtml /></h4>
                   <h4><SiCsswizardry /></h4>
                   <h4><SiJavascript /></h4>
              </div>

              <div className='skillbox'>
                    <h4><FaSass /></h4>
                    <h4><FaBootstrap /></h4>
                    <h4><SiPython /></h4>
              </div>
              
              <div className='skillbox'>
                    <h4><FaReact /></h4>
                    <h4><TbBrandDjango /></h4>
                    <h4><AiOutlineConsoleSql /></h4>
              </div>
             
            </div>
        </div>
            
            
            
      
    </Element>
    
  )
}

export default Skills