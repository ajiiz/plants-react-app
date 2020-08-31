import React from 'react'
import '../../styles/Home/header.scss'

const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <h1 className="title">plant<span>s</span>pot</h1>
                <h3 className="subtitle">healthy breath</h3>
                <hr className="divider"></hr>
            </div>
        </header>
    )
}

export default Header