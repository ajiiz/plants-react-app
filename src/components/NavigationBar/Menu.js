import React from 'react'
import '../../styles/NavigationBar/menu.css'
import Logo from './Logo'
import MenuOptions from './MenuOptions'

const Menu = () => {
    return (
        <div className="menu">
            <Logo />
            <MenuOptions />
        </div>
    )
}

export default Menu