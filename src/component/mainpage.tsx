
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { DarkModeToggle } from "react-dark-mode-toggle-2";
import mypic from "./assets/myprofile.jpg";

import { LazyLoadComponent } from 'react-lazy-load-image-component';
import About from './About';
import Skill from './Skill';
import Work from './Work';






function Mainpage() {

    const [isDarkMode, setIsDarkMode] = React.useState(false);
    const darkStyle = {
        backgroundColor: '#30363d',
        color: 'white'
    };
    const lightStyle = {
        backgroundColor: '#a72d00',
        color: 'White'
    }

    const aboutdarkStyle = {
        backgroundColor: "white-200",
        color: '#343a40',
        fontFamily: 'initial'
    }

    const aboutlightStyle = {
        backgroundColor: 'white',
        color: '#2b2929',
        fontFamily: 'initial'
    }

    return (
        <div style={isDarkMode ? darkStyle : lightStyle}>


            <div className='navbar navbar-expand '>
                <div className='col ps-4 navbar-brand'>

                    <div className='col'>
                        <img src={mypic} alt="set" width='100px' className='rounded-circle border border-3' />

                    </div>
                    <div className='col'><h4 className='text-white fw-bold'>Welcome, <FontAwesomeIcon icon={faHandshakeAngle} className="text-warning" /></h4></div>

                </div>

                <div className='col d-flex  justify-content-end'>
                    <ul className="navbar-nav">
                        <li className='nav-item'><h4><a href='https://github.com/Excel-Adeniyi' className='nav-link text-white fst-italic'>
                            <FontAwesomeIcon icon={faGithub} />
                        </a></h4></li>

                        <li className='nav-item'><h4><a href='https://wa.me/+2348161722995' className='nav-link text-white fst-italic'>
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a></h4></li>

                        <li className='nav-item'><h4><a href='https://www.linkedin.com/in/excelade/' className='nav-link text-white fst-italic'>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a></h4></li>

                    </ul>

                </div>
                <DarkModeToggle
                    onChange={setIsDarkMode}
                    isDarkMode={isDarkMode}
                    size={50}

                />
            </div>

            <section id='#about' className='pb-3' >

                <div className='container rounded ' style={isDarkMode ? aboutdarkStyle : aboutlightStyle}>

                    <h5 className='text-center pt-5 pb-2'>ADENIYI <span className='' style={{ fontFamily: "sans-serif" }}>EZEKIEL (SpotDEV)</span></h5>




                    <h4 className='text-center fw-bold'>Full-Stack JavaScript Developer</h4>
                    <p className='fst-italic text-center pb-3' style={{ fontSize: '12px' }}>Coding isn't just what I do, I enjoy every part of it and helping people with this skill</p>
                </div>

            </section>


            <LazyLoadComponent delayTime={10000} delayMethod="debounce">
                <About />
            </LazyLoadComponent>

            <LazyLoadComponent delayTime={10000} delayMethod="debounce">
                <Skill />
            </LazyLoadComponent>
            <LazyLoadComponent delayTime={1000} delayMethod="debounce">
                <Work />
            </LazyLoadComponent>


            <section style={isDarkMode ? aboutdarkStyle : aboutlightStyle}>
                <div className='col container text-start pt-5'>
                    <p style={{ color: 'black' }}>Email: <a href='mailto:adeniyiexcel@gmail.com' className='text-dark'>Adeniyiexcel@gmail.com</a></p>
                    <div className='row'>
                        <div className='navbar navbar-expand d-flex justify-content-start col'>
                            <ul className="navbar-nav">
                                <li className='nav-item'><h4><a href='https://github.com/Excel-Adeniyi' className='nav-link text-dark fst-italic'>
                                    <FontAwesomeIcon icon={faGithub} />
                                </a></h4></li>

                                <li className='nav-item'><h4><a href='https://wa.me/+2348161722995' className='nav-link text-dark fst-italic'>
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </a></h4></li>

                                <li className='nav-item'><h4><a href='https://www.linkedin.com/in/excelade/' className='nav-link text-dark fst-italic'>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a></h4></li>

                            </ul>
                        </div>

                        <div className='col'>

                        </div>
                        <div className='col text-end align-self-end'>
                            <p style={{ fontSize: '12px' }}>2022, SpotDEV.</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Mainpage



