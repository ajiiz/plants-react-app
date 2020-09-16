import React from 'react'
import ImageNotFound from '../../assets/image-not-found.jpg'

const PlantsItems = ({ commonName, imgUrl, scientificName, genus, slug}) => {

    const imgStyle = {
        backgroundImage: (imgUrl!==null) ? `url(${imgUrl})` : `url(${ImageNotFound})`
    }

    const test = () => { console.log(imgUrl)}
    return (
        <div className="plants__container__content__plant" onClick={()=>test()}>
            <div
                className="plants__container__content__plant__image"
                style={imgStyle}
            />
            <div className="plants__container__content__plant__information">
                <p className="plants__container__content__plant__information__text">{commonName}</p>
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
            </div>
        </div>
    )
}

export default PlantsItems