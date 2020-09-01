import React, { useState, useEffect } from 'react'
import '../../styles/NavigationBar/menu.scss'
import Logo from './Logo'
import MenuOptions from './MenuOptions'
import Hamburger from './Hamburger'

const Menu = () => {

    const [isSticky, setIsSticky] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
    }, [])

    const changeBackground = () => {
        (window.scrollY >= 100) ?
        setIsSticky(true)
        : setIsSticky(false)
    }

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const activeBurger = {
        flexWrap: 'wrap',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        background: 'rgba(255, 255, 255, 0.76)',
        transition: 'all .5s ease-in-out'
    }

    return (
        <nav>
            <div className={isSticky ? 'menu stick' : 'menu'} style={isOpen ? activeBurger : null}>
                <Logo isOpen={isOpen} />
                <Hamburger handleClick={handleClick} isOpen={isOpen} />
                <MenuOptions isOpen={isOpen} />
            </div>
        </nav>
    )
}

export default Menu