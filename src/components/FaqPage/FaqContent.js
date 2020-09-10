import React from 'react'

const FaqContent = ({ question, answer }) => {
    return (
        <div className="faq__content__wrapper">
            <h3 className="faq__content__wrapper__question">{question}</h3>
            <p className="faq__content__wrapper__answer">{answer}</p>
        </div>
    )
}

export default FaqContent