import React from 'react';
import { Element } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import { PiHandWavingFill } from "react-icons/pi";
import Resume from '../Assest/undraw_percentages_re_a1ao.svg';
import homeimg from "../home2.jpg"

export function Home() {
    return (
        <>
            <Element className='home' name='Home'>
            
                <div class="container-fluid">
                    <div className='background'>
                        <div className='content'>
                            <h1>Hii, <span><PiHandWavingFill />  </span><br></br>
                                <h1>I am </h1>
                                <Typewriter
                                    options={{
                                        strings: [' Full Stack Developer..', 'Frontend Developer..', 'coder..'],
                                        autoStart: true,
                                        loop: true,
                                        delay: 75,
                                    }} />
                            </h1>
                            <p>
                                i am <span>Manickaraj</span> , a web Developer with a Strong passion for Exploring and learing.<br></br>
                                my ethusisam for web development has led me to choose it as my career path and <br></br>i would make good UI page with greater user experience(UX )
                            </p><br></br>

                            <div className='resume'>
                                <a href={Resume} download='Resume'>Resume</a>
                                <a>About Me</a>
                            </div>

                        </div>

                    </div>


                </div>
         
            </Element>

        </>
    );
}
