import React, { useRef, useEffect } from 'react'
import '../../styles/Home/header.scss'
import { Power3, TimelineLite } from 'gsap'

const Header = () => {
    /* Header Animation */
    let container = useRef(null)
    let header = useRef(null)
    let tl = new TimelineLite({delay: .4})
    useEffect(() => {
        const title = container.firstElementChild
        const subTitle = container.children[1]
        const divider = container.lastElementChild
        tl.from(header, {duration: 2, opacity: 0, ease: Power3.easeInOut})
        .from(title,  {duration: 1.5, opacity: 0, y: "-250", ease: Power3.easeOut}, 2.5)
        .from(subTitle, {duration: 2, opacity: 0, x: "250", ease: Power3.easeInOut}, 3)
        .from(divider,  {duration: 1.5, opacity: 0, x: "-250", ease: Power3.easeInOut}, 3.5)
    }, [tl])

    return (
        <header ref={el => header = el}>
            <div className="container" ref={el => container = el}>
                <h1 className="container__title">plant<span>s</span>pot</h1>
                <h3 className="container__subtitle">healthy breath</h3>
                <hr className="container__divider"></hr>
            </div>
        </header>
    )
}

export default Header