import React from 'react'
import '../../styles/Home/about.css'
import AboutItem from './AboutItem'
import Image_1 from '../../assets/image-about-1.jpg'
import Image_2 from '../../assets/image-about-2.jpg'
import Image_3 from '../../assets/image-about-3.jpg'

const About = () => {
    return (
        <div className="about">
            <h1>MAIN TITLE</h1>
            <div className="about__items">
                <AboutItem title="title_1" text="lorem ipsum 1" img={Image_1}/>
                <AboutItem title="title_2" text="lorem ipsum 2" img={Image_2}/>
                <AboutItem title="title_3" text="lorem ipsum 3" img={Image_3}/>
            </div>
        </div>
    )
}

export default About
