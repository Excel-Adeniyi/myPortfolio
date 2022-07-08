import React from 'react'
import FtiMobile from '../assets/ftimobile.png'
import FtiWeb from '../assets/ftiweb.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNodeJs, faHtml5, faBootstrap, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import Styled, { keyframes } from 'styled-components'
import { fadeInLeft, fadeInRight, lightSpeedIn } from 'react-animations'

function Fti() {
    const [isDarkMode] = React.useState(false);


    const workdarkStyle = {
        backgroundColor: '#30363d',
        color: 'white',
        boxShadow: '#a72d00 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'
    }
    const worklightStyle = {
        backgroundColor: '#a72d00',
        color: 'White',
        boxShadow: '#30363d 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'
    }
  return (
    <div>
        <div className='container rounded-3 mb-5' style={isDarkMode ? workdarkStyle : worklightStyle}>
                            <div className="row">
                                <div className='col-12 col-lg-8 align-self-center d-flex justify-content-center '>
                                    <FadeIn>
                                        <div className=' pt-3 pb-3'>

                                            <img src={FtiWeb} className="rounded-3 " alt='mobile' width={'100%'} height="" />


                                        </div>
                                    </FadeIn>
                                </div>
                                <div className='col'>
                                    <LightSpeedAn>
                                        <div className='d-flex justify-content-center pt-3 pb-3'>
                                            <img src={FtiMobile} className="rounded-3 " alt='mobile' width={'250px'} />


                                        </div>
                                    </LightSpeedAn>
                                </div>

                            </div>
                            <div className=' justify-content-center d-flex'>
                                <div className='col-lg-7 col text-white align-self-center'>
                                    <FadeInFour>
                                        <h1><FontAwesomeIcon icon={faQuoteLeft} className=" border-bottom" /></h1>
                                        <h4 className='text-center'>FTI CHALLENGE</h4>
                                        <p style={{ textAlign: 'justify' }}>
                                            This project was built for competition, it was developed for the purpose of registration, data-storage and mailing of participant of the competition.
                                        </p>
                                        <p>
                                             Myself(SpotDEV) and NEXUS-Bolt worked on this project. I worked on redesigning of the project and  full Back-end deployment.
                                        </p>
                                        <h5><a href='https://ftichallenge.com' className='text-white fw-bolder'>View Project</a></h5>
                                        <h1><FontAwesomeIcon icon={faQuoteRight} className=" border-bottom" /></h1>
                                    </FadeInFour>
                                </div>

                            </div>
                            <FadeInThree>
                                <div className='row d-flex justify-content-center'>

                                    <div className='col-2 mt-3 text-center'>

                                        <h1 ><img src='https://www.postgresql.org/media/img/about/press/elephant.png' alt='mysql' width={"50px"} /></h1>

                                    </div>

                                    <div className='col-2 mt-3 text-center'>
                                        <h1><FontAwesomeIcon icon={faNodeJs} /></h1>

                                    </div>

                                    <div className='col-2 mt-3 text-center'>
                                        <h1> <FontAwesomeIcon icon={faHtml5} /></h1>

                                    </div>

                                    <div className='col-2 mt-3 text-center'>
                                        <h1><FontAwesomeIcon icon={faBootstrap} /></h1>

                                    </div>


                                    <div className='col-2 mt-3 text-center'>
                                        <h1><FontAwesomeIcon icon={faJsSquare} /></h1>

                                    </div>






                                </div>
                            </FadeInThree>
                            <FadeInFive>
                                <div className='col pb-3 text-center'>
                                    <h4>Heroku</h4>

                                </div>
                            </FadeInFive>
                        </div>
    </div>
  )
}

export default Fti
const FadeinAnimationLeft = keyframes`${fadeInLeft}`;
const FadeinAnimationRIght = keyframes`${fadeInRight}`;
const LightAnimation = keyframes`${lightSpeedIn}`

const FadeIn = Styled.div`
animation: 3s ${FadeinAnimationLeft}
`
const LightSpeedAn = Styled.div`
animation: 3s ${LightAnimation}
`

const FadeInThree = Styled.div`
animation: 9s ${FadeinAnimationLeft}
`
const FadeInFour = Styled.div`
animation: 3s ${FadeinAnimationRIght}
`
const FadeInFive = Styled.div`
animation: 5s ${FadeinAnimationRIght}
`
