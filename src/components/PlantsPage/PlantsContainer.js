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
    const [query, setQuery] = useState('*')
    const [values, setValues] = useState({
        color: '#ff0000',
        searchValue: '',
        isColorChecked: false
    })

    const API = {
        KEY: process.env.REACT_APP_API_KEY,
        URL: '/api/v1/species/'
    }

    useEffect(() => {
        setIsLoading(true)
        fetch(API.URL+'search?q='+query+'&filter%5Bflower_color%5D=red,yellow'+`&page=${currentPage}`+"&token="+API.KEY)
            .then(res => res.json())
            .then(json => {
                setData(json)
                let linkLast = json.links.last
                let maxPages = getTotalPages(linkLast)
                setTotalPages(maxPages)
            })
            .then(()=>setIsLoading(false))
    },[currentPage, query])

    useEffect(() => {
        setCurrentPage(1)
        if(values.searchValue === '') {
            setQuery('*')
        } else setQuery(values.searchValue)
    }, [values.searchValue])

    const getTotalPages = (linkLast) => {
        console.log(linkLast)
        let maxPages = ""
        for(let i = linkLast.search("page=") + 5; i < linkLast.length; i++) {
            //loop that starts after word 'page' in link and ends when  whole number with all pages is found
            if(linkLast[i] >= 0 && linkLast[i] < 10) maxPages += linkLast[i]
            else break
        }
        return maxPages
    }

    const changeCurrentPage = (n) => {
        if(n !== 0) {
            setCurrentPage(n)
        }
    }

    const handleChange = (event) => {
        const { name, value, checked, type } = event.target
        let checked2 = event.target.checked
        if(type === "checkbox") {
            setValues({
                ...values,
                [name]: checked2
            })
        } else {
            setValues({
                ...values,
                [name]: value
            })
        }
    }

    return (
            <div className="plants" onClick={()=>console.log(data)}>
                <PlantsHeader />
                <div className="plants__container">
                    <PlantsForm
                        searchValue={values.searchValue}
                        color={values.color}
                        isColorChecked={values.isColorChecked}
                        handleChange={handleChange}
                        />
                    <div className="plants__container__items">
                        {
                            (!isLoading) ?
                                (data.meta.total > 0) ?
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
                                        )})
                                :   <p className="plants__container__items__error">ITEMS NOT FOUND</p>
                            :  <LoadingSpinner />
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
