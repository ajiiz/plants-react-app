import React from 'react'

const Logo = ({ isOpen }) => {

    const activeBurger = {
        width: '50%',
        flex: '0.5'
    }

    return (
        <div className="menu__logo" style={isOpen ? activeBurger : null}>
            <span>pp</span>
        </div>
    )
}

export default Logo