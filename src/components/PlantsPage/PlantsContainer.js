import React, { useState, useEffect } from 'react'
import PlantsItems from './PlantsItems'
import PlantsHeader from './PlantsHeader'
import PlantsForm from './PlantsForm'
import PlantsPageSelect from './PlantsPageSelect'
import "../../styles/Plants/plants.scss"

const PlantsContainer = () => {
    const [data, setData] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    const API = {
        KEY: process.env.REACT_APP_API_KEY,
        URL: `/api/v1/plants?`
    }

    useEffect(() => {
        setIsLoading(true)
        fetch(API.URL+`&page=${currentPage}`+"&token="+API.KEY)
            .then(res => res.json())
            .then(json => {
                setData(json)
                setTotalPages(json.meta.total)
            })
            .then(()=>setIsLoading(false))
    },[currentPage])

    const changeCurrentPage = (n) => {
        if(n !== 0) {
            setCurrentPage(n)
        }
    }

    const test = () => {
        console.log(totalPages)
    }

    return (
            <div className="plants" onClick={()=>test()}>
                <PlantsHeader />
                <div className="plants__container">
                    <PlantsForm />
                    <div className="plants__container__content">
                        {
                            (!isLoading) ?
                                data.data.map((data, key) => {
                                    return(
                                        <PlantsItems
                                            key={key}
                                            commonName={data.common_name}
                                            imgUrl={data.image_url}
                                            scientificName={data.scientific_name}
                                            slug={data.slug}
                                            genus={data.genus}
                                        />
                                    )
                            })  : <p>LOADING</p>
                        }
                    </div>
                    <PlantsPageSelect currentPage={currentPage} changeCurrentPage={changeCurrentPage} />
                </div>
            </div>
    )
}

export default PlantsContainer
