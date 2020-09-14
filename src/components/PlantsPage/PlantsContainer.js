import React, { useState, useEffect } from 'react'
import PlantsItems from './PlantsItems'
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
            <div className="plants">
                <div className="plants__header"></div>
                <div className="plants__container">
                {
                (!isLoading) ?
                    data.data.map((data, key) => {
                        return(
                            <PlantsItems
                                key={key}
                                common_name={data.common_name}
                                img_url={data.image_url}
                                scientific_name={data.scientific_name}
                                slug={data.slug}
                                genus={data.genus}
                            />
                        )
                    })  : <p>LOADING</p>
                }
                </div>
            </div>
    )
}

export default PlantsContainer
