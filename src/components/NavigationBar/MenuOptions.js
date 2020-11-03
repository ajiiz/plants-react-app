import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(NavLink)`
text-decoration: none;
color: inherit;
border: 2px solid transparent;
&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}
`

const MenuOptions = ({ isOpen, handleClick }) => {

    const activeLinkStyles = {
        borderColor: 'rgb(85,107,47)'
    }

    const activeBurger = {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: '3em',
        marginBottom: '3em'
    }

    const scrollTop = () => {
        handleClick()
        document.documentElement.scrollTop = 0
    }

    return (
        <ul className="menu__list" style={isOpen ? activeBurger : null}>
            <StyledLink
                to="/home"
                activeStyle={activeLinkStyles}>
                <li className="menu__list__items" onClick={scrollTop}>Home</li>
            </StyledLink>
            <StyledLink
                to="/plants"
                activeStyle={activeLinkStyles}>
                <li className="menu__list__items" onClick={scrollTop}>Plants</li>
            </StyledLink>
            <StyledLink
                to="/faq"
                activeStyle={activeLinkStyles}>
                <li className="menu__list__items" onClick={scrollTop}>Faq</li>
            </StyledLink>
        </ul>
    )
}

export default MenuOptions