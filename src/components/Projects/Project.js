import React from 'react';
import { Element } from 'react-scroll';
import '../Projects/project.css';
import codee from "../codecorner.jpg";
import waterful from "../waterful.jpg";
import ecom from "../ecom.jpg"



function Project() {
  function waterFul(){
    window.open("https://manicka98.github.io/juicie-water/waterful.html")
  }

  function eCom(){
    window.open("https://manicka98.github.io/Juicie-Fruit/juicie.html")
  }

  function code(){
    window.open("https://manicka98.github.io/Code-Corner/Home.html")
  }

  return (
   
        <Element className='project' id="Project">
          <div className='project'>
                <div className='projectlogo'><h1><span className='projectlogo2'>MyProject </span></h1></div>
          </div>
            
            <div className='cardlist col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
              <div className='card'>
                  <h1> Code Corner</h1>
                  <p>Create a simple Website for Software Solutions company,that Showcase various software services,the Project build HTML CSS js</p>
                  <img src={codee}></img>
                  <button className='btn btn-warning m-2 w-10' onClick={code}>Click to View</button>
              </div>

              <div className='card md-1 lg-2 xl-3'>
                  <h1> Faree E-Commerce</h1>
                  <p>Create a simple Website for E-Commerce that Showcase various software services,the Project build HTML CSS js</p>
                  <img src={ecom}></img>
                  <button className='btn btn-warning m-2 w-10' onClick={eCom}>Click to View</button>
              </div>

              <div className='card md-1 lg-2 xl-3'>
                  <h1> Juicie Fruits</h1>
                  <p>Create a simple Website for Faree collection's company,that Showcase various software services,the Project build HTML CSS js</p>
                  <img src={waterful}></img>
                
                  <button className='btn btn-warning m-2 w-10' onClick={waterFul}>Click to View</button>
              </div>


              

              

              

              
                
                
            </div>
        </Element>
  
  )
}

export default Project