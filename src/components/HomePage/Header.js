import React, { useRef, useEffect } from 'react'
import '../../styles/Home/header.scss'
import { Power3, TimelineLite } from 'gsap'

const Header = () => {
    let container = useRef(null)
    let tl = new TimelineLite
    useEffect(() => {

        const title = container.firstElementChild
        const subTitle = container.children[1]
        const divider = container.lastElementChild
        tl.from(title, 2, {y: 500, ease: Power3.easeOut})
        .from(subTitle, 2, {y: 500, ease: Power3.easeOut}, .6)
        .from(divider, 2, {y: 500, ease: Power3.easeOut}, 1.2)
    }, [])

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