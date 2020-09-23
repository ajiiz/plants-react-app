import React from 'react'
import ColorNames from '../../assets/colors.json'

const PlantsForm = ({ onSearchChange, searchValue, color, isColorChecked}) => {
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
                {/*
                <select name="color" onChange={(e) => onSearchChange(e)}>
                    <option value=""></option>
                    {ColorNames.colors.map((color, key) => {
                        return <option key={key} value={color}>{color}</option>
                    }
                    )}
                </select> */}
                <label>
                    Search for color?
                    <input
                        type="checkbox"
                        name="isColorChecked"

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