import React, { useState, useEffect } from 'react'
import PlantsItems from './PlantsItems'
import PlantsHeader from './PlantsHeader'
import PlantsForm from './PlantsForm'
import PlantsPageSelect from './PlantsPageSelect'
import "../../styles/Plants/plants.scss"

const PlantsContainer = () => {
    const [data, setData] = useState({})
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    const API = {
        KEY: process.env.REACT_APP_API_KEY,
        URL: `/api/v1/plants?`
    }

    useEffect(() => {
        setIsLoading(true)
        fetch(API.URL+`&page=${page}`+"&token="+API.KEY)
            .then(res => res.json())
            .then(json => {
                setData(json)
                setTotalPages(json.meta.total)
            })
            .then(()=>setIsLoading(false))
    },[page])

    const changePage = (n) => {
        if(n !== 0) {
            setPage(n)
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
                    <PlantsPageSelect page={page} changePage={changePage} />
                </div>
            </div>
    )
}

export default PlantsContainer
