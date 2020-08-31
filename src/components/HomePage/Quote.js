import React from 'react'
import '../../styles/Home/quote.scss'
import QuoteItem from './QuoteItem'
import Image_1 from '../../assets/image-about-dark-1.jpg'
import Image_2 from '../../assets/image-about-2.jpg'
import Image_3 from '../../assets/image-about-3.jpg'

const Quote = () => {

    return (
        <div className="quotes">
            <div className="quotes__title">
                <h3 className="text">green power</h3>
                <hr className="divider"></hr>
            </div>
            <div className="quotes__items">
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
