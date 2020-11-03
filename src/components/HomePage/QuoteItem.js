import React, { useEffect, useRef } from 'react'
import { gsap, Power1 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const QuoteItems = ( { img, text, altText} ) => {

    /* Quote Items Animation */

    let quoteContent = useRef(null)
    useEffect(() => {
        let quoteContentArr = Array.from(quoteContent.children)
            quoteContentArr.forEach(text => {
                gsap.from(text,
                    {opacity: 0, stagger: 1, duration: 1.2, ease: Power1.easeInOut,
                        scrollTrigger: {
                            trigger: text,
                            start: '-140 50%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                )
            })
    },[])

    /* End of the animation */

    return (
        <div className="quotes__items__item">
            <div className="quotes__items__item__imagewrapper">
                <img src={img} alt={altText}></img>
            </div>
            <div className="quotes__items__item__content" ref={el => quoteContent = el}>
                <hr className="quotes__items__item__content__divider"></hr>
                <div className="quotes__items__item__content__text">{text}</div>
            </div>
        </div>
    )
}

export default QuoteItems
