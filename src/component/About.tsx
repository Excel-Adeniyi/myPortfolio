import React from 'react'
import { fadeInLeft, fadeInRight, fadeIn } from 'react-animations';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Styled, { keyframes } from 'styled-components';

function About() {
    const [isDarkMode] = React.useState(false);

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
        <div>  <section style={isDarkMode ? aboutdarkStyle : aboutlightStyle}>
            <LazyLoadComponent>
                <h4 className='text-center pt-4 pb-3'>About Me</h4>
                <div className='container pb-3'>
                    <div className='row d-flex justify-content-center'>

                        <FadeInLeft className='col'>
                            <div className='col-lg-10 col mb-3' style={{ textAlign: 'justify' }}>
                                <h4>Who am I?</h4>
                                I'm a fullstack developer, I develop for both the web and mobile apps, as well, I am facilitator for bootCamps and tech outreach when I am not coding e.g tech2grassroots, tech2school e.t.c
                            </div>

                            <div className='col-lg-10 col' style={{ textAlign: 'justify' }}>
                                <h4>SpotDEV</h4>
                                <p>You might be wondering who is SpotDEV?. The answer is simple I am spotDEV and SpotDEV is my brand name.</p>

                            </div>
                        </FadeInLeft>
                        <FadeIn className='col'>
                            <div className='col-lg-10 col' style={{ textAlign: 'justify', fontWeight: 'light', fontSize: '15px' }}>
                                <h4>Experience</h4>
                                <p>I've been a developer for over three years, working with other senior developers to learn about the field and to acquire the neccessary skill-set required of a fullstack developer. I've worked in alot of joint projects which has help my growth and has increased my standard as a fullstack developer, making development not just a Job but a part of me.</p>
                                <p></p>
                            </div>
                        </FadeIn>

                    </div>
                </div>
            </LazyLoadComponent>
        </section></div>
    )
}

export default About
const FadeinAnimationLeft = keyframes`${fadeInLeft}`;
const FadeinAnimationRIght = keyframes`${fadeInRight}`;
const FadeinAnimation = keyframes`${fadeIn}`;

const FadeInLeft = Styled.div`
animation: 1s ${FadeinAnimationLeft}
`

const FadeIn = Styled.div`
animation: 3s ${FadeinAnimation}
`