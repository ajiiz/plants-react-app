import React from 'react'

const PlantsPageSelect = ({ currentPage, changeCurrentPage, totalPages }) => {
    return (
        <div className="plants__container__buttons">
            <button
                style={{display: (currentPage === 1) ? 'none' : 'inline'}}
                onClick={()=>changeCurrentPage(1)}>
                First
            </button>
            <button
                onClick={()=>changeCurrentPage(currentPage)}>
                { currentPage }
            </button>
            <button
                style={{display: ( currentPage + 1 > totalPages) ? 'none' : 'inline'}}
                onClick={()=>changeCurrentPage(currentPage + 1)}>
                { currentPage + 1}
            </button>
            <button
                style={{display: ( currentPage + 2 > totalPages) ? 'none' : 'inline'}}
                onClick={()=>changeCurrentPage(currentPage + 2)}>
                { currentPage + 2}
            </button>
            <button
                style={{display: (currentPage === totalPages) ? 'none' : 'inline'}}
                onClick={()=>changeCurrentPage(totalPages)}>
                Last
            </button>
        </div>
    )
}

export default PlantsPageSelect