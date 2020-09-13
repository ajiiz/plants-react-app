import React, { useState, useEffect } from 'react'
import Plants from './Plants'
import "../../styles/Plants/plants.scss"

const PlantsContainer = () => {
    const [data, setData] = useState({})
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)

    const API = {
        KEY: process.env.REACT_APP_API_KEY,
        URL: `/api/v1/plants?order%5Byear%5D=asc&page=${page}&token=`
    }

    useEffect(() => {
        setIsLoading(true)
        fetch(API.URL+API.KEY)
            .then(res => res.json())
            .then(json => setData(json))
            .then(()=>setIsLoading(false))
    },[])

    const test = () => {
        console.log(data)
    }
    return (
        (!isLoading) ? (
            <div className="plants">
            <div style={{height:'200px', width:'200px', backgroundColor:'red'}} onClick={()=>test()}>CLICK ME</div>
            {
                data.data.map((data, key) => {
                    return(
                        <Plants
                            key={key}
                            common_name={data.common_name}
                            img_url={data.image_url}
                            scientific_name={data.scientific_name}
                            slug={data.slug}
                            genus={data.genus}
                        />
                    )
                })
            }
            </div>
        ) : (
            <p>LOADING</p>
        )
    )
}

export default PlantsContainer
