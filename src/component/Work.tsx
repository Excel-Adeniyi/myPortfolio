import React from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import Fti from './Work/Fti'
import T2w from './Work/T2w'
import Cryp from './Work/Cryp'
function Work() {
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
        <div>
            <section>
                <div style={isDarkMode ? aboutdarkStyle : aboutlightStyle}>
                    <div className='container pb-5'>

                        <h4 style={{ fontVariantCaps: 'small-caps' }}><u>Projects Done</u></h4>

                        <LazyLoadComponent delayTime={10000} delayMethod="debounce">
                            <Fti />
                        </LazyLoadComponent>  
                        <LazyLoadComponent delayTime={20000} delayMethod="debounce">
                            <T2w />
                        </LazyLoadComponent>

                       <LazyLoadComponent delayTime={30000} delayMethod="debounce">
                        <Cryp />
                       </LazyLoadComponent>


                        

                    </div>

                </div>
            </section>
        </div>
    )
}

export default Work



