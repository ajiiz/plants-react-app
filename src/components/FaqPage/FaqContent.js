import React from 'react'

const FaqContent = ({ question, answer }) => {
    return (
        <div className="faq__content__wrapper">
            <h3 className="faq__content__wrapper__question">
                <span>{question[0]}</span>
                {question.substr(1,question.length-2)}
                <span>{question[question.length-1]}</span>
            </h3>
            <p className="faq__content__wrapper__answer">
                <span>{answer[0]}</span>
                {answer.substr(1,answer.length)}
            </p>
            <hr className="faq__content__wrapper__divider"></hr>
        </div>
    )
}

export default FaqContent