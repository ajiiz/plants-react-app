import React from 'react'
import '../../styles/Home/header.scss'

const Header = () => {
    return (
        <header>
            <div className="container">
                <h1 className="container__title">plant<span>s</span>pot</h1>
                <h3 className="container__subtitle">healthy breath</h3>
                <hr className="container__divider"></hr>
            </div>
        </header>
    )
}

export default Header