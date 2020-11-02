import React from 'react'
import Quote from './Quote'
import Header from './Header'
import About from './About'

const Home = () => {

    return (
        <div className="wrapper">
            <Header />
            <Quote />
            <About />
        </div>
    )
}

export default Home