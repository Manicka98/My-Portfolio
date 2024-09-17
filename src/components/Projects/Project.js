import React from 'react';
import { Element } from 'react-scroll';
import '../Projects/project.css';


function Project() {
  return (
   
        <Element className='project' id="Project">
          <div className='projectflex'>
                <div className='projectlogo'><h3><span className='projectlogo2'>My</span>Project</h3></div>
          </div>
            
            <div className='card'>
                <div className='box'>
                  <div pro_img>
                    <img src='{Project1}' alt='Code Corner'></img>
                   
                  </div>
                  <button className='cardbtn'>View</button>
                </div>
                <div className='box'>< button className='cardbtn'>View</button></div>
                <div className='box'><button className='cardbtn'>View</button></div>
                
            </div>
        </Element>
  
  )
}

export default Project