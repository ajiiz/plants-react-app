import React from 'react'

const QuoteItems = ( { img, text, altText} ) => {

    return (
        <div className="quotes__items__item">
            <div className="quotes__items__item__imagewrapper">
                <img src={img} alt={altText}></img>
            </div>
            <div className="quotes__items__item__content">
                <hr className="quotes__items__item__content__divider"></hr>
                <div className="quotes__items__item__content__text">{text}</div>
            </div>
        </div>
    )
}

export default QuoteItems
