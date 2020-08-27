import React from 'react'

const AboutItems = ( {title, img, text} ) => {
    return (
        <div className='about__item'>
            <img src={img} alt={title}></img>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

export default AboutItems
