import React, { useEffect, useRef } from 'react'
import FaqContent from './FaqContent'
import { FaqItems } from './FaqItems'
import '../../styles/Faq/faq.scss'
import { Power1, TimelineLite } from 'gsap'

const Faq = () => {

    /* FAQ Animation */

    let header = useRef(null)
    let tl = new TimelineLite({delay: 1})
    useEffect(() => {
        const title = header.firstElementChild
        const title_2 = header.children[1]
        const title_3 = header.children[2]
        const divider = header.lastElementChild
        tl.from(title, {duration: 1.6, opacity: 0, ease: Power1.easeInOut})
            .from(title_2, {duration: 1.6, opacity: 0, ease: Power1.easeInOut}, '-=1')
            .from(title_3, {duration: 1.6, opacity: 0, ease: Power1.easeInOut}, '-=1')
            .from(divider, {duration: 1.6, opacity: 0, ease: Power1.easeInOut}, '-=1')
    }, [tl])

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
            <div className="faq__content">
                {items}
            </div>
        </div>
    )
}

export default Faq
