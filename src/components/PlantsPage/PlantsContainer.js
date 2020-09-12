import React, { useState, useEffect } from 'react'
import Plants from './Plants'
import "../../styles/Plants/plants.scss"

const PlantsContainer = () => {
    const [data, setData] = useState({})
    const [page, setPage] = useState(1)

    const API = {
        KEY: process.env.REACT_APP_API_KEY,
        URL: `https://trefle.io/api/v1/plants?page=${page}&token=`
    }

    useEffect(() => {
        fetch(API.URL+API.KEY)
            .then(res => res.json())
            .then(json => setData(json))
    },[])

    const test = () => {
        console.log(data)
    }
    return (
        <div style={{height:'200px', width:'200px', backgroundColor:'red'}} onClick={()=>test()}>CLICK ME</div>
    )
}

export default PlantsContainer
