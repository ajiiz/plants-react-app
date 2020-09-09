import React from 'react'
import FaqContent from './FaqContent'
import { FaqItems } from './FaqItems'
import '../../styles/Faq/faq.scss'

const Faq = () => {

    const items = FaqItems.map((data, key) => {
        return (
            <FaqContent question={data.question} answer={data.answer} key={key} />
        )
    })

    return (
        <div className="faq">
            <div className="faq__image"></div>
            <div className="faq__content">
                <h3 className="faq__content__title">faq</h3>
                {items}
            </div>
        </div>
    )
}

export default Faq
