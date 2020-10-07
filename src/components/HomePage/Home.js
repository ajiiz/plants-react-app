import React, { useEffect, useRef } from 'react'
import Quote from './Quote'
import Header from './Header'
import About from './About'
import { TweenMax } from 'gsap'

const Home = () => {
    let home = useRef(null)
    useEffect(() => {
        TweenMax.to(home, 0, {css: {visibility: 'visible'}})
    })
    return (
        <div ref={el => home = el} className="wrapper">
            <Header />
            <Quote />
            <About />
        </div>
    )
}

export default Home