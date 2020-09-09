import React from 'react'

const FaqContent = ({ question, answer }) => {
    return (
        <div className="faq__content">
            <h3 className="faq__content__header">{question}</h3>
            <p className="faq__content__text">{answer}</p>
        </div>
    )
}

export default FaqContent