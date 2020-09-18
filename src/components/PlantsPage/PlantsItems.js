import React, { useEffect } from 'react'
import ImageNotFound from '../../assets/image-not-found.jpg'

const PlantsItems = ({ commonName, imgUrl, scientificName, genus, slug}) => {

    const imgStyle = {
        backgroundImage: (imgUrl!==null) ? `url(${imgUrl})` : `url(${ImageNotFound})`
    }

    const checkText = (text) => {
        if(text === null) {
            text = scientificName
        } else if(scientificName === null) {
            text = "Not Found"
        }
        return text
    }

    const firstUpper = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1)
    }

    const test = () => { console.log(imgUrl)}
    return (
        <div className="plants__container__content__plant">
            <div
                className="plants__container__content__plant__image"
                style={imgStyle}
            />
            {/*
            <div className="plants__container__content__plant__information">
                <p className="plants__container__content__plant__information__text">{commonName = checkText(commonName)}</p>
                <p className="plants__container__content__plant__information__text">Common Name</p>
                <hr className="plants__container__content__plant__information__divider"></hr>
                <p className="plants__container__content__plant__information__text">{scientificName}</p>
                <p className="plants__container__content__plant__information__text">Scientific Name</p>
                <hr className="plants__container__content__plant__information__divider"></hr>
                <p className="plants__container__content__plant__information__text">{genus}</p>
                <p className="plants__container__content__plant__information__text">Genus</p>
                <hr className="plants__container__content__plant__information__divider"></hr>
                <p className="plants__container__content__plant__information__text">{slug}</p>
                <p className="plants__container__content__plant__information__text">Slug</p>
            </div> */}
            <div className="plants__container__content__plant__information">
                <h3>{firstUpper(scientificName)}</h3>
                <p>Also called {firstUpper(commonName)}. Is a spiecies of the </p>
            </div>
        </div>
    )
}

export default PlantsItems