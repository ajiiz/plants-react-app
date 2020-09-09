import React from 'react'

const FaqContent = ({ question, answer }) => {
    return (
        <>
            <h3 className="faq__content__question">{question}</h3>
            <p className="faq__content__answer">{answer}</p>
        </>
    )
}

export default FaqContent