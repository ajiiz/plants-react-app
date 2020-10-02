import React from 'react'

const PlantsForm = ({ searchValue, color, isColorChecked, handleChange }) => {

    return (
        <div className="plants__container__form">
            <form>
                    <span className="plants__container__form__inputtext">Search by plant name</span>
                    <input
                        type="text"
                        name="searchValue"
                        value={searchValue}
                        onChange={(e) => handleChange(e)}
                    />
                    <p className="plants__container__form__undertext">type search value</p>
                <label>
                    <span className="plants__container__form__inputtext">Include your color?</span>
                    <input
                        type="checkbox"
                        name="isColorChecked"
                        value={isColorChecked}
                        checked={isColorChecked}
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                {
                    isColorChecked &&
                        <>
                            <span className="plants__container__form__inputtext">Search by color</span>
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