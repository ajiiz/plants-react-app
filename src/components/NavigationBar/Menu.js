import React, { useState, useEffect } from 'react'
import '../../styles/NavigationBar/menu.scss'
import Logo from './Logo'
import MenuOptions from './MenuOptions'
import Hamburger from './Hamburger'

const Menu = () => {

    const [navbar, setNavBar] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
    }, [])

    const changeBackground = () => {
        (window.scrollY >= 100) ?
        setNavBar(true)
        : setNavBar(false)
    }

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav>
            <div className={navbar ? 'menu active' : 'menu'}>
                <Logo />
                <Hamburger handleClick={handleClick} isOpen={isOpen} />
                <MenuOptions />
            </div>
        </nav>
    )
}

export default Menu