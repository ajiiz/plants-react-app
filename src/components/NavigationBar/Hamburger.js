import React, { useState } from 'react'

const Hamburger = ({ handleClick, isOpen }) => {

    const activeBurger = {
        width: '50%',
        display: 'flex',
        flex: '0.5',
        justifyContent: 'flex-end'
    }

    return (
        <div className={!isOpen ? "menu__btn" : "menu__btn menu__btn__open"}
            onClick={handleClick}
            style={isOpen ? activeBurger : null}>
            <div className="menu__btn__burger"></div>
        </div>
    )
}

export default Hamburger