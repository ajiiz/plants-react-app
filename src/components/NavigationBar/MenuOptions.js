import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const MenuOptions = () => {

    const activeStyles = {
        borderColor: 'rgb(85,107,47)'
    }

    const StyledLink = styled(NavLink)`
        text-decoration: none;
        color: inherit;
        border: 2px solid transparent;
        &:focus, &:hover, &:visited, &:link, &:active {
            text-decoration: none;
        }
    `
    return (
        <ul className="menu__list">
            <StyledLink
                to="/home"
                activeStyle={activeStyles}>
                <li className="menu__list__items">Home</li>
            </StyledLink>
            <StyledLink
                to="/plants"
                activeStyle={activeStyles}>
                <li className="menu__list__items">Plants</li>
            </StyledLink>
            <StyledLink
                to="/faq"
                activeStyle={activeStyles}>
                <li className="menu__list__items">Faq</li>
            </StyledLink>
        </ul>
    )
}

export default MenuOptions