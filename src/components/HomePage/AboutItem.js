import React from 'react'

const AboutItems = ( { img, text} ) => {

    return (
        <div className='about__items__item'>
            <div className='imagewrapper'>
                <img className="image" src={img}></img>
            </div>
            <hr className="divider"></hr>
            <p>{text}</p>
        </div>
    )
}

export default AboutItems
