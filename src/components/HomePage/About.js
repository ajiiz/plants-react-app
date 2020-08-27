import React from 'react'
import '../../styles/Home/about.css'
import AboutItem from './AboutItem'
import Image_1 from '../../assets/image-about-dark-1.jpg'
import Image_2 from '../../assets/image-about-2.jpg'
import Image_3 from '../../assets/image-about-3.jpg'

const About = () => {
    return (
        <div className="about">
            <div className="about__title">
                <h3 className="text">green power</h3>
                <hr className="divider"></hr>
            </div>
            <div className="about__items">
                <AboutItem text="lorem ipsum 1" img={Image_1}/>
                <AboutItem text="lorem ipsum 2" img={Image_2}/>
                <AboutItem text="lorem ipsum 3" img={Image_3}/>
            </div>
        </div>
    )
}

export default About
