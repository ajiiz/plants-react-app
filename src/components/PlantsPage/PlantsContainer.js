import React, { useState, useEffect } from 'react'
import Plants from './Plants'
import "../../styles/Plants/plants.scss"

const API_KEY = process.env.REACT_APP_API_KEY

const PlantsContainer = () => {

    useEffect(() => {
        console.log(API_KEY)
    })

    return (
        <Plants />
    )
}

export default PlantsContainer
