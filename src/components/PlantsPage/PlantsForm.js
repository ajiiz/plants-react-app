import React from 'react'

const PlantsForm = ({ onSearchChange, searchValue}) => {
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
            </form>
        </div>
    )
}

export default PlantsForm