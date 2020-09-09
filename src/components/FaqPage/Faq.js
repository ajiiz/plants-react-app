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
            <div className="faq__image">
                <h3 className="faq__image__title">frequently</h3>
                <h3 className="faq__image__title">asked</h3>
                <h3 className="faq__image__title">questions</h3>
                <hr className="faq__image__divider"></hr>
            </div>
            <div className="faq__content">
                {items}
            </div>
        </div>
    )
}

export default Faq
