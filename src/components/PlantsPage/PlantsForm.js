import React from 'react'

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
                    <option value="red">red</option>
                </select>
            </form>
        </div>
    )
}

export default PlantsForm