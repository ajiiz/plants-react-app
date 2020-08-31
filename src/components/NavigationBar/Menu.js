import React, { useState, useEffect } from 'react'
import '../../styles/NavigationBar/menu.scss'
import Logo from './Logo'
import MenuOptions from './MenuOptions'

const Menu = () => {

    const [navbar, setNavBar] = useState(false)

    const changeBackground = () => {
        (window.scrollY >= 100) ?
        setNavBar(true)
        : setNavBar(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
    }, [])

    return (
        <div className={navbar ? 'menu active' : 'menu'}>
            <Logo />
            <MenuOptions />
        </div>
    )
}

export default Menu