import React, { useState, useEffect } from 'react'
import Plants from './Plants'
import "../../styles/Plants/plants.scss"

const PlantsContainer = () => {
    const [data, setData] = useState({})
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)

    const API = {
        KEY: process.env.REACT_APP_API_KEY,
        URL: `https://trefle.io/api/v1/plants?page=${page}&token=`
    }

    useEffect(() => {
        setIsLoading(true)
        fetch(API.URL+API.KEY)
            .then(res => res.json())
            .then(json => setData(json))
            .then(()=>setIsLoading(false))
    },[])

    const test = () => {
        console.log(data.data[0].common_name)
    }
    return (
        (!isLoading) ? (
            <>
            <div style={{height:'200px', width:'200px', backgroundColor:'red'}} onClick={()=>test()}>CLICK ME</div>
            </>
        ) : (
            <p>LOADING</p>
        )
    )
}

export default PlantsContainer
