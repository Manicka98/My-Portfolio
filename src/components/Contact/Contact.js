import React from 'react'
import { Element } from 'react-scroll'
import '../Contact/contact.css'
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


function Contact() {
  return (
   
    <Element id='Contact'name='contact'>
        
          <h1>Contact Me</h1>
          <h2>Let's Talk</h2>

          <div className='Contactcontainer'>

            <div className='contact_right'>

              <div>
                
                <h1>Chat On Social Media</h1>
              
              </div>

              <div className='socialmedia'>

                <a href=' https://web.whatsapp.com/' target='blank' title='blank'>     <FaSquareWhatsapp /></a>
                <a href='https://www.instagram.com/?hl=en' target='blank' title='blank' >     <FaFacebook /></a>
                <a href='https://www.facebook.com/' target='blank' title='blank'>     <FaInstagramSquare /></a>
                <a href='https://github.com/Manicka98' target='blank' title='blank'>     <FaGithub /></a>

              </div>
            </div>


            <div className='contact_left'>

            <div className='contact_input_group'>
                <input type='text' placeholder='Enter Your Name'></input>
                <input type='email' placeholder='Enter Gmail'></input> <br></br>
                <textarea placeholder='Message........'></textarea> <br></br>
                <button className='button  type1'>Submit</button>
              </div>
              <br></br>





            </div>

            
            
          </div>

          <div className='footer'>
              <h1>
                &copy;2024 Copyright <br></br>
                 Proudly It Made By Manick
              </h1>

            </div>

        
        
        
    

    </Element>
    
    

  )
}

export default Contact

