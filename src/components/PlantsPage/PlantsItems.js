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
                <div><p>Common Name: </p><p>{commonName}</p></div>
                <div><p>Scientific Name: </p><p>{scientificName}</p></div>
                <div><p>Genus: </p><p>{genus}</p></div>
                <div><p>Slug: </p><p>{slug}</p></div>
            </div>
        </div>
    )
}

export default PlantsItems