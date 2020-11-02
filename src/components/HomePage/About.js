import React, { useEffect, useRef } from 'react'
import '../../styles/Home/about.scss'
import { gsap, Power1 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {

    /* About Animation */

    let aboutTextSections = useRef(null)
    useEffect(() => {
        let aboutTextSectionsArr = Array.from(aboutTextSections.children)
        aboutTextSectionsArr.forEach(text => {
            gsap.from(text,
                {opacity: 0, stagger: 0.8, duration: 1.2, y:'30', ease: Power1.easeInOut,
                    scrollTrigger: {
                        trigger: text,
                        start: '-120 50%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )
        })
    },[])

    /* End of the animation */

    return (
        <div className="about">
            <div className="about__imagewrapper"></div>
            <div className="about__container" ref={el => aboutTextSections = el}>
                <h3 className="about__container__title">master the green</h3>
                <hr className="about__container__divider"></hr>
                <div className="about__container__text"><p>
                    There are many benefits of having plants in your room.
                    Not only they might be a great decorative items but also
                    have much more influence on your life. They improve state
                    of being and lower your stress levels. May also help you
                    solving sleeping problems. But most importantly they are
                    natural air purifiers. There are many more advantages
                    but the best way is to find it out yourself. Turn your
                    room to a green paradise!
                </p></div>
            </div>
        </div>
    )
}

export default About
