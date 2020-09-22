import React from 'react'
import ColorNames from '../../assets/colors.json'

const PlantsForm = ({ onSearchChange, searchValue, color}) => {
    return (
        <div className="plants__container__form">
            <form>
                Search
                <input
                    type="text"
                    name="search box"
                    value={searchValue}
                    onChange={(e) => onSearchChange(e)}
                />
                <select name="color" onChange={(e) => onSearchChange(e)}>
                    <option value=""></option>
                    {ColorNames.colors.map((color, key) => {
                        return <option key={key} value={color}>{color}</option>
                    }
                    )}
                </select>
            </form>
        </div>
    )
}

export default PlantsForm