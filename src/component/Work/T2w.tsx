import React from 'react'
import Tech2Mobile from '../assets/tech2gr.png'
import Tech2Web from '../assets/tech2web.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWordpress } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import Styled, { keyframes } from 'styled-components'
import { fadeInLeft, fadeInRight, lightSpeedIn } from 'react-animations'

function T2w() {
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
                                <div className='col-lg-8 col-12 align-self-center'>
                                    <div className='d-flex justify-content-center  pt-3 pb-3'>
                                        <FadeIn>
                                            <img src={Tech2Web} className="rounded-3 " alt='mobile' width={'100%'} />

                                        </FadeIn>
                                    </div>
                                </div>
                                <div className='col'>

                                    <div className='d-flex justify-content-center pt-3 pb-3'>
                                        <LightSpeedAn>
                                            <img src={Tech2Mobile} className="rounded-3 " alt='mobile' width={'250px'} />
                                        </LightSpeedAn>

                                    </div>
                                </div>

                            </div>
                            <div className=' justify-content-center d-flex'>
                                <FadeInThree>
                                    <div className='col-lg-7 col text-white align-self-center'>

                                        <h1><FontAwesomeIcon icon={faQuoteLeft} className=" border-bottom" /></h1>
                                        <h4 className='text-center'>TECH2GRASSROOTS</h4>
                                        <p style={{ textAlign: 'justify' }}>
                                            This project was built for promotion of event, it was built using C.M.S. (Wordpress) to enable the organization who owns the site edit easily.
                                        </p>
                                        <h5><a href='https://tech2grassroots.com.ng' className='text-white fw-bolder'>View Project</a></h5>
                                        <h1><FontAwesomeIcon icon={faQuoteRight} className=" border-bottom" /></h1>
                                    </div>
                                </FadeInThree>
                            </div>
                            <FadeInFive>
                                <div className='text-center pb-3'>
                                    <h1><FontAwesomeIcon icon={faWordpress} /> Wordpress</h1>
                                </div>
                            </FadeInFive>
                        </div>
    </div>
  )
}

export default T2w
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
const FadeInFive = Styled.div`
animation: 5s ${FadeinAnimationRIght}
`
