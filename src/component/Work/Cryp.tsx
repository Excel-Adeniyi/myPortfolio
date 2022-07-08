import React from 'react'
import CryptoWeb from '../assets/cryptoWeb.png'
import CryptoMobile from '../assets/cryptoMobilr.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faReact } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import Styled, { keyframes } from 'styled-components'
import { fadeInLeft, fadeInRight, lightSpeedIn } from 'react-animations'

function Cryp() {
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
                                            <img src={CryptoWeb} className="rounded-3 " alt='mobile' width={'100%'} />
                                        </FadeIn>

                                    </div>
                                </div>
                                <div className='col'>

                                    <div className='d-flex justify-content-center pt-3 pb-3'>
                                        <LightSpeedAn>
                                            <img src={CryptoMobile} className="rounded-3 " alt='mobile' width={'250px'} />
                                        </LightSpeedAn>

                                    </div>
                                </div>

                            </div>

                            <div className=' justify-content-center d-flex'>
                                <FadeInThree>
                                    <div className='col-lg-7 col text-white align-self-center'>
                                        <h1><FontAwesomeIcon icon={faQuoteLeft} className=" border-bottom" /></h1>
                                        <h4 className='text-center'>CryptohoodNFT</h4>
                                        <p style={{ textAlign: 'justify' }}>
                                            A Web3 project built for NFT minting, I worked marjorly on the front-end on this project.
                                        </p>
                                        <h5><a href='https://cryptohoodnft.com' className='text-white fw-bolder'>View Project</a></h5>
                                        <h1><FontAwesomeIcon icon={faQuoteRight} className=" border-bottom" /></h1>
                                    </div>
                                </FadeInThree>
                            </div>
                            <FadeInFive>
                                <div className="row d-flex justify-content-center">
                                    <div className='col-1 text-center pb-3'>
                                        <h1><FontAwesomeIcon icon={faReact} /></h1>

                                    </div>

                                    <div className=' col-1 text-center pb-3'>
                                        <h1><FontAwesomeIcon icon={faBootstrap} /></h1>

                                    </div>

                                    <div className=' col-2 text-center pb-3'>
                                        <h1>PWA</h1>

                                    </div>

                                    <div className='col-2 text-center pb-3'>
                                        <h1>VERCEL</h1>

                                    </div>
                                </div>
                            </FadeInFive>


                        </div>
    </div>
  )
}

export default Cryp
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
