import React from 'react'

const PlantsItems = ({ commonName, imgUrl, scientificName, genus, slug}) => {
    return (
        <div className="plants__container__content__plant" onClick={()=>console.log(imgUrl)}>
            <img alt="" src={imgUrl} style={{width:'100px', height:'100px'}}></img>
            <p>common_name: {commonName}</p>
            <p>scientific_name: {scientificName}</p>
            <p>genus: {genus}</p>
            <p>slug: {slug}</p>
        </div>
    )
}

export default PlantsItems