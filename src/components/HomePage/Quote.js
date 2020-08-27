import React from 'react'
import '../../styles/Home/quote.css'
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
                <QuoteItem text="lorem ipsum 1" img={Image_3}/>
                <QuoteItem text="lorem ipsum 2" img={Image_1}/>
                <QuoteItem text="lorem ipsum 3" img={Image_2}/>
            </div>
        </div>
    )
}

export default Quote
