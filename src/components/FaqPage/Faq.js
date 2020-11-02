import React, { useEffect, useRef } from 'react'
import FaqContent from './FaqContent'
import { FaqItems } from './FaqItems'
import '../../styles/Faq/faq.scss'
import { Power1, gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Faq = () => {

    /* FAQ Animation */

    let header = useRef(null)
    let contentItems = useRef(null)
    useEffect(() => {



    }, [])

    /* End of the animation */

    const items = FaqItems.map((data, key) => {
        return (
            <FaqContent question={data.question} answer={data.answer} key={key} />
        )
    })

    return (
        <div className="faq">
            <div className="faq__image" ref={el => header = el}>
                <h3 className="faq__image__title">frequently</h3>
                <h3 className="faq__image__title">asked</h3>
                <h3 className="faq__image__title">questions</h3>
                <hr className="faq__image__divider"></hr>
            </div>
            <div className="faq__content" ref={el => contentItems = el}>
                {items}
            </div>
        </div>
    )
}

export default Faq
