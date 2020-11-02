import React, { useEffect, useRef } from 'react'
import '../../styles/Home/quote.scss'
import QuoteItem from './QuoteItem'
import Image_1 from '../../assets/image-home-quote-1.jpg'
import Image_2 from '../../assets/image-home-quote-2.jpg'
import Image_3 from '../../assets/image-home-quote-3.jpg'
import { Power1, gsap } from 'gsap'
import { ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Quote = () => {

    /* Quote Animation */
    let quoteTitle = useRef(null)
    let quoteItems = useRef(null)
    useEffect(() => {

        gsap.from(quoteTitle,
            {opacity: 0, stagger: 0.6, duration: 1.5, y:'30', ease: Power1.easeInOut,
                scrollTrigger: {
                    trigger: quoteTitle,
                    start: '-96 50%',
                    toggleActions: 'play none none reverse'
                }
            })
            let quoteItemsArr = Array.from(quoteItems.children)
            quoteItemsArr.forEach(quote => {
                gsap.from(quote,
                    {opacity: 0, stagger: 0.8, duration: 1.2, y:'30', ease: Power1.easeInOut,
                        scrollTrigger: {
                            trigger: quote,
                            start: '-96 50%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                )
            })
    },[])

    /* End of the animation */

    return (
        <div className="quotes">
            <div className="quotes__title" ref={el => quoteTitle = el}>
                <h3 className="quotes__title__text">green power</h3>
                <hr className="quotes__title__divider"></hr>
            </div>
            <div className="quotes__items" ref={el => quoteItems = el}>
                <QuoteItem
                    text="The plants are very psychic, but they can express it only by silence and beauty."
                    img={Image_3}
                    altText="have"
                />
                <QuoteItem
                    text="Working with plants will teach you all other social commitments in a soothing way."
                    img={Image_1}
                    altText="a nice"
                />
                <QuoteItem
                    text="So plant your own gardens and decorate your own soul, instead of waiting for someone to bring you flowers."
                    img={Image_2}
                    alteText="day"
                />
            </div>
        </div>
    )
}

export default Quote
