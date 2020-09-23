import React from 'react'
import ColorNames from '../../assets/colors.json'

const PlantsForm = ({ onSearchChange, searchValue, color, isColorChecked, onIsColorCheckedChange }) => {
    return (
        <div className="plants__container__form">
            <form>
                <label>
                    Search
                    <input
                        type="text"
                        name="searchBox"
                        value={searchValue}
                        onChange={(e) => onSearchChange(e)}
                    />
                </label>
                <label>
                    Search for color?
                    <input
                        type="checkbox"
                        name="isColorChecked"
                        value={isColorChecked}
                        onChange={() => onIsColorCheckedChange()}
                    />
                </label>
                {
                    isColorChecked &&
                        <label>
                            Select for color
                            <input
                                type="color"
                                name="color"
                            />
                        </label>
                }
            </form>
        </div>
    )
}

export default PlantsForm