import React from 'react'

const PlantsForm = ({ searchValue, color, isColorChecked, handleChange }) => {

    return (
        <div className="plants__container__form">
            <form>
                    <p className="plants__container__form__inputtext">
                    Search by
                        <span> plants </span>
                    name</p>
                    <input
                        type="text"
                        name="searchValue"
                        value={searchValue}
                        onChange={(e) => handleChange(e)}
                    />
                    <p className="plants__container__form__undertext">type search value</p>
                <label>
                    <p className="plants__container__form__colortext">Include your color?
                    <input
                        type="checkbox"
                        name="isColorChecked"
                        value={isColorChecked}
                        checked={isColorChecked}
                        onChange={(e) => handleChange(e)}
                    /></p>
                </label>
                {
                    isColorChecked &&
                        <>
                            <input
                                type="text"
                                name="color"
                                value={color}
                                onChange={(e) => handleChange(e)}
                            />
                            <p className="plants__container__form__undertext">type color value</p>
                        </>
                }
            </form>
        </div>
    )
}

export default PlantsForm