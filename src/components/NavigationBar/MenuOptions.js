import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const MenuOptions = () => {

    const activeStyles = {
        border: '2px solid rgb(85,107,47)'
    }

    const StyledLink = styled(NavLink)`
        text-decoration: none;
        color: inherit;
        &:focus, &:hover, &:visited, &:link, &:active {
            text-decoration: none;
        }
    `
    return (
        <ul className="menu__list">
            <li className="menu__list__items">
            <StyledLink
                to="/about"
                activeStyle={activeStyles}>
                    About
            </StyledLink>
            </li>
            <StyledLink
                to="/plants"
                activeStyle={activeStyles}>
                    <li className="menu__list__items">Plants</li>
            </StyledLink>
        </ul>
    )
}

export default MenuOptions