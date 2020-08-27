import React from 'react'

const AboutItems = ( { img, text} ) => {

    return (
        <div className='about__items__item'>
            <div className='imagewrapper'>
                <img className="image" src={img}></img>
            </div>
            <div className="itemcontent">
                <hr className="divider"></hr>
                <div className="itemcontent__text">{text}</div>
            </div>
        </div>
    )
}

export default AboutItems
