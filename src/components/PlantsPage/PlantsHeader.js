import React, { useEffect, useRef } from 'react'
import { gsap, Power1 } from 'gsap'

const PlantsHeader = () => {

    /* Plants Header Animation */
    let header = useRef(null)
    useEffect(() => {
        gsap.from(header.children,{opacity: 0, stagger: 0.6, duration: 1.5, y:'60', ease: Power1.easeInOut})
    }, [])
    /* End of the animation */

    return (
        <div className="plants__header" ref={el => header = el}>
            <h3 className="plants__header__title">search</h3>
            <h3 className="plants__header__title">for</h3>
            <h3 className="plants__header__title">plants</h3>
            <hr className="plants__header__divider"></hr>
        </div>
    )
}

export default PlantsHeader