import React, { useRef, useEffect } from 'react'
import '../../styles/Home/header.scss'
import { Power1, gsap } from 'gsap'

const Header = () => {

    /* Header Animation */

    let container = useRef(null)
    useEffect(() => {
        const title = container.firstElementChild
        const subTitle = container.children[1]
        const divider = container.lastElementChild
        gsap.from(title,  {delay: 1.5, duration: 1.5, opacity: 0, y: "-250", ease: Power1.easeOut})
        gsap.from(subTitle, {delay: 2.5, duration: 2, opacity: 0, x: "250", ease: Power1.easeInOut})
        gsap.from(divider,  {delay: 4.5, duration: 1.5, opacity: 0, x: "-250", ease: Power1.easeInOut})
    })

    /* End of the animation */

    return (
        <header>
            <div className="container" ref={el => container = el}>
                <h1 className="container__title">plant<span>s</span>pot</h1>
                <h3 className="container__subtitle">healthy breath</h3>
                <hr className="container__divider"></hr>
            </div>
        </header>
    )
}

export default Header