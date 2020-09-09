import React from 'react'
import FaqContent from './FaqContent'
import { FaqItems } from './FaqItems'

const Faq = () => {

    const items = FaqItems.map((data, key) => {
        return (
            <FaqContent question={data.question} answer={data.answer} key={key} />
        )
    })

    return (
        <div className="faq">
            <div className="faq__image"></div>
            {items}
        </div>
    )
}

export default Faq
