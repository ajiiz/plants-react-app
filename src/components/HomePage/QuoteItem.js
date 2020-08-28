import React from 'react'

const QuoteItems = ( { img, text, altText} ) => {

    return (
        <div className='quotes__items__item'>
            <div className='imagewrapper'>
                <img className="image" src={img} alt={altText}></img>
            </div>
            <div className="itemcontent">
                <hr className="divider"></hr>
                <div className="itemcontent__text">{text}</div>
            </div>
        </div>
    )
}

export default QuoteItems
