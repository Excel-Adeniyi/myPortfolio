import { faHtml5, faCss3, faBootstrap, faReact, faJsSquare, faNodeJs, faVuejs, faPython, faPhp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { fadeInLeft, fadeInRight, fadeIn } from 'react-animations';
import Styled, { keyframes } from 'styled-components';

function Skill() {
    const [isDarkMode] = React.useState(false);
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
        <div>
            <section style={{ fontSize: '12px' }}>

                <div style={isDarkMode ? darkStyle : lightStyle}>

                    <div className='container'>
                        <h4 style={{ fontVariantCaps: 'small-caps' }}><u>My skills</u></h4>
                        <div className='row justify-content-center d-flex'>

                            <div className='col mt-3 text-center'>
                                <FadeIn className='one'>
                                    <h1> <FontAwesomeIcon icon={faHtml5} /></h1>
                                    HTML
                                </FadeIn>
                            </div>
                            <div className='col mt-3 text-center'>
                                <FadeInOne className='two'>
                                    <h1><FontAwesomeIcon icon={faCss3} /></h1>
                                    CSS
                                </FadeInOne>
                            </div>
                            <div className='col mt-3 text-center'>
                                <FadeInTwo className='three'>
                                    <h1><FontAwesomeIcon icon={faBootstrap} /></h1>
                                    BootStrap
                                </FadeInTwo>
                            </div>
                            <div className='col mt-3 text-center'>
                                <FadeInThree className='four'>
                                    <h1><FontAwesomeIcon icon={faReact} /></h1>
                                    React
                                </FadeInThree>
                            </div>
                        </div>
                        <div className='row justify-content-center d-flex'>
                            <div className='col mt-3 text-center'>
                                <FadeInFour>
                                    <h1><FontAwesomeIcon icon={faJsSquare} /></h1>
                                    JavaScript
                                </FadeInFour>
                            </div>
                            <div className='col mt-3 text-center'>
                                <FadeInFive>
                                    <h1><FontAwesomeIcon icon={faNodeJs} /></h1>
                                    NodeJs
                                </FadeInFive>
                            </div>
                            <div className='col mt-3 text-center'>
                                <FadeInSix>
                                    <h1><img src='https://storage.googleapis.com/cms-storage-bucket/ec64036b4eacc9f3fd73.svg' alt='flutter' width={'50px'} /></h1>
                                    Flutter
                                </FadeInSix>
                            </div>
                            <div className='col mt-3 text-center'>
                                <FadeInSeven>
                                    <img src='https://styled-components.com/icon.png' alt='set' width={'50px'} />

                                    <div className=''>Styled</div>
                                    <div className=''>Components</div>

                                </FadeInSeven>

                            </div>
                        </div>
                        <div className='row justify-content-center d-flex'>
                            <div className='col mt-3 text-center'>
                                <FadeInEight>
                                    <h1><FontAwesomeIcon icon={faVuejs} /></h1>
                                    Vue
                                </FadeInEight>
                            </div>

                            <div className='col mt-3 text-center'>
                                <FadeInNine>
                                    <h1><img src='https://labs.mysql.com/common/logos/mysql-logo.svg?v2 ' className="bg-white" alt='mysql' width={"50px"} /></h1>
                                    MySQL
                                </FadeInNine>
                            </div>

                            <div className='col mt-3 text-center'>
                                <FadeInTen>
                                    <h1 style={isDarkMode ? aboutlightStyle : aboutdarkStyle}><img src='https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg' alt='mysql' width={"70px"} /></h1>
                                    MongoDB
                                </FadeInTen>
                            </div>

                            <div className='col mt-3 text-center'>
                                <FadeInEleven>
                                    <h1 ><img src='https://www.postgresql.org/media/img/about/press/elephant.png' alt='mysql' width={"50px"} height="20px" /></h1>
                                    Postgresql
                                </FadeInEleven>
                            </div>
                            <div className='row justify-content-center d-flex'>
                                <div className='col mt-3 text-center mb-5' style={{ width: '60px' }}>
                                    <FadeInTwelve>
                                        <h1 className=" ">TS</h1>
                                        TypeScript
                                    </FadeInTwelve>
                                </div>
                                <div className='col mt-3 text-center'>

                                </div>
                                <div className='col mt-3 text-center'>

                                </div>
                                <div className='col mt-3 text-center'>

                                </div>
                            </div>
                        </div>
                        <h4 style={{ fontVariantCaps: 'small-caps' }}><u>Currently Learning</u></h4>
                        <FadeInTwo>
                            <div className='row justify-content-center d-flex'>


                                <div className='col mt-3 text-center'>
                                    <h1><FontAwesomeIcon icon={faPython} /></h1>
                                    Python
                                </div>

                                <div className='col mt-3 text-center'>
                                    <h1><FontAwesomeIcon icon={faPhp} /></h1>
                                    Php
                                </div>
                                <div className='col mt-3 text-center'>

                                </div>
                                <div className='col mt-3 text-center'>

                                </div>
                            </div>
                        </FadeInTwo>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default Skill

const FadeinAnimationLeft = keyframes`${fadeInLeft}`;
const FadeinAnimationRIght = keyframes`${fadeInRight}`;
const FadeinAnimation = keyframes`${fadeIn}`;


const FadeIn = Styled.div`
animation: 3s ${FadeinAnimationLeft}
`

const FadeInOne = Styled.div`
animation: 5s ${FadeinAnimationLeft}
`
const FadeInTwo = Styled.div`
animation: 7s ${FadeinAnimationLeft}
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
const FadeInSix = Styled.div`
animation: 7s ${FadeinAnimationRIght}
`
const FadeInSeven = Styled.div`
animation: 9s ${FadeinAnimationRIght}
`
const FadeInEight = Styled.div`
animation: 3s ${FadeinAnimation}
`
const FadeInNine = Styled.div`
animation: 5s ${FadeinAnimation}
`
const FadeInTen = Styled.div`
animation: 7s ${FadeinAnimation}
`
const FadeInEleven = Styled.div`
animation: 9s ${FadeinAnimation}
`
const FadeInTwelve = Styled.div`
animation: 3s ${FadeinAnimationLeft}
`
