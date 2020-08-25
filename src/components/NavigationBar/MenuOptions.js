import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const MenuOptions = () => {

    const activeStyles = {
        color: "black",
        backgroundColor: "#bbbb"
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
            <StyledLink
                to="/about"
                activeStyle={activeStyles}>
                    <li className="menu__list__items">About</li>
            </StyledLink>
            <StyledLink
                to="/plants"
                activeStyle={activeStyles}>
                    <li className="menu__list__items">Plants</li>
            </StyledLink>
        </ul>
    )
}

export default MenuOptions