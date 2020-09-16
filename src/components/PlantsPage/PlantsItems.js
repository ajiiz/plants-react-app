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
                <p>common_name: {commonName}</p>
                <p>scientific_name: {scientificName}</p>
                <p>genus: {genus}</p>
                <p>slug: {slug}</p>
            </div>
        </div>
    )
}

export default PlantsItems