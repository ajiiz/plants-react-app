import React, { useState, useEffect } from 'react'
import PlantsItems from './PlantsItems'
import PlantsHeader from './PlantsHeader'
import PlantsForm from './PlantsForm'
import PlantsPageSelect from './PlantsPageSelect'
import LoadingSpinner from './LoadingSpinner'
import "../../styles/Plants/plants.scss"

const PlantsContainer = () => {
    const [data, setData] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [searchValue, setSearchValue] = useState('')
    const [query, setQuery] = useState('*')

    const API = {
        KEY: process.env.REACT_APP_API_KEY,
        URL: '/api/v1/species/'
    }

    useEffect(() => {
        setIsLoading(true)
        fetch(API.URL+'search?q='+query+`&page=${currentPage}`+"&token="+API.KEY)
            .then(res => res.json())
            .then(json => {
                setData(json)
                let linkLast = json.links.last
                linkLast = linkLast.substring(28)
                let maxPages = ''
                for(let i = 0; i < linkLast.length; i++) {
                    if(linkLast[i] !== '&') maxPages += linkLast[i]
                    else break
                }
                setTotalPages(maxPages)
            })
            .then(()=>setIsLoading(false))
    },[currentPage, query])

    useEffect(() => {
        setCurrentPage(1)
        if(searchValue === '') {
            setQuery('*')
        } else setQuery(searchValue)
    }, [searchValue])

    const changeCurrentPage = (n) => {
        if(n !== 0) {
            setCurrentPage(n)
        }
    }

    const onSearchChange = (e) => {
        setSearchValue(e.target.value)
    }

    return (
            <div className="plants">
                <PlantsHeader />
                <div className="plants__container">
                    <PlantsForm searchValue={searchValue} onSearchChange={onSearchChange} />
                    <div className="plants__container__items">
                        {
                            (!isLoading) ?
                                data.data.map((data, key) => {
                                    return(
                                        <PlantsItems
                                            key={key}
                                            commonName={data.common_name}
                                            imgUrl={data.image_url}
                                            scientificName={data.scientific_name}
                                            family={data.family}
                                            synonyms={data.synonyms}
                                            author={data.author}
                                        />
                                    )}
                            )  : <LoadingSpinner />
                        }
                    </div>
                    <PlantsPageSelect
                        currentPage={currentPage}
                        changeCurrentPage={changeCurrentPage}
                        totalPages={totalPages}
                    />
                </div>
            </div>
    )
}

export default PlantsContainer
