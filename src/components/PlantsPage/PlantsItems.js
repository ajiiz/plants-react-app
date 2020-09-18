import React from 'react'
import ImageNotFound from '../../assets/image-not-found.jpg'

const PlantsItems = ({ commonName, imgUrl, scientificName, family, synonyms, author }) => {

    const imgStyle = {
        backgroundImage: (imgUrl!==null) ? `url(${imgUrl})` : `url(${ImageNotFound})`
    }

    const checkName = (text) => {
        if(text === null) {
            text = scientificName
        } else if(scientificName === null) {
            return text = "[not found]"
        }
        return text.charAt(0).toUpperCase() + text.slice(1)
    }

    const lowestLengthSyn = (arr) => {
        let syn = ""
        if(arr.length !== 0) {
            let minLen = Number.POSITIVE_INFINITY
            arr.forEach(el => {
                syn = (el.length < minLen) ? el : ""
            });
            return syn
        } else return "[not found]"

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
                        {checkName(scientificName)}
                    </h3>
                    <p className="plants__container__items__item__content__wrapper__info">
                        Also called
                            <span className="plants__container__items__item__content__wrapper__info__commonname">
                                {" "+checkName(commonName)}.
                            </span>
                        <p>It is a spiecies of the
                        <span className="plants__container__items__item__content__wrapper__info__family">
                            {" "+family}
                            </span> family.</p>
                        <p className="plants__container__items__item__content__wrapper__info__synonyms">
                            synonym
                            <span className="plants__container__items__item__content__wrapper__info_synonyms__length">
                                {(synonyms.length !== 0) ? "("+synonyms.length+")" : null}
                            </span>:
                            {" "+lowestLengthSyn(synonyms)}

                        </p>
                        <p className="plants__container__items__item__content__wrapper__info__author">
                            [author: {author}]
                        </p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PlantsItems