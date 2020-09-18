import React from 'react'
import ImageNotFound from '../../assets/image-not-found.jpg'

const PlantsItems = ({ commonName, imgUrl, scientificName, family, synonyms, author }) => {

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
        if(text !== null) return text.charAt(0).toUpperCase() + text.slice(1)
        else return ""
    }

    const lowestLength = (arr) => {
        let syn = ""
        if(arr.length !== 0) {
            let minLen = Number.POSITIVE_INFINITY
            arr.forEach(el => {
                syn = (el.length < minLen) ? el : ""
            });
        }
        return syn
    }
    return (
        <div className="plants__container__items__item">
            <div
                className="plants__container__items__item__image"
                style={imgStyle}
            />
            <div className="plants__container__items__item__content">
                <div className="plants__container__items__item__content__wrapper">
                    <h3 className="plants__container__items__item__content__wrapper__name">
                        {firstUpper(scientificName)}
                    </h3>
                    <p className="plants__container__items__item__content__wrapper__info">Also called {firstUpper(commonName)}.
                        Is a spiecies of the
                        <span className="plants__container__items__item__content__wrapper__info__family">
                            {family}</span> family.
                    </p>
                    <p className="plants__container__items__item__content__wrapper__synonyms">
                        synonyms: {lowestLength(synonyms)}, ...
                        <span className="plants__container__items__item__content__wrapper__synonyms__length">
                            ({(synonyms.length !== undefined) ? synonyms.length : null})
                        </span>
                    </p>
                    <p className="plants__container__items__item__content__wrapper__author">
                        [author: {author}]
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PlantsItems