import React from 'react'

const Plants = ({ common_name, img_url, scientific_name, genus, slug}) => {
    return (
        <div className="plants" onClick={()=>console.log(img_url)}>
            <img src={img_url} style={{width:'100px', height:'100px'}}></img>
            <p>common_name: {common_name}</p>
            <p>scientific_name: {scientific_name}</p>
            <p>genus: {genus}</p>
            <p>slug: {slug}</p>
        </div>
    )
}

export default Plants