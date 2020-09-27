import React from 'react'

const PlantsForm = ({ searchValue, color, isColorChecked, handleChange }) => {

    const checkColor = () => {
        console.log(colorNames)
    }

    return (
        <div className="plants__container__form">
            <form>
                <label>
                    Search
                    <input
                        type="text"
                        name="searchValue"
                        value={searchValue}
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                <br />
                <label>
                    Search for color?
                    <input
                        type="checkbox"
                        name="isColorChecked"
                        value={isColorChecked}
                        checked={isColorChecked}
                        onChange={(e) => handleChange(e)}
                    />
                </label><br />
                {
                    isColorChecked &&
                        <label>
                            Select for color
                            <input
                                type="text"
                                name="color"
                                value={color}
                                onChange={(e) => handleChange(e)}
                            />
                        </label>
                }
            </form>
        </div>
    )
}

export default PlantsForm