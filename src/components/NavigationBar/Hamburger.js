import React, { useState } from 'react'

const Hamburger = ({ handleClick, isOpen }) => {
    return (
        <div className={!isOpen ? "menu__btn" : "menu__btn menu__btn__open"} onClick={handleClick}>
            <div className="menu__btn__burger"></div>
        </div>
    )
}

export default Hamburger