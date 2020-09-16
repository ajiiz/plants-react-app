import React from 'react'

const PlantsPageSelect = ({ currentPage, changeCurrentPage }) => {
    return (
        <div plants__page-buttons>
            <button
                style={{display: (currentPage===1) ? 'none' : 'inline'}}
                onClick={()=>changeCurrentPage(currentPage - 1)}>
                Previous
            </button>
            <button onClick={()=>changeCurrentPage(1)}>First</button>
            <button onClick={()=>changeCurrentPage(currentPage)}>{ currentPage }</button>
            <button onClick={()=>changeCurrentPage(currentPage + 1)}>{ currentPage + 1}</button>
            <button onClick={()=>changeCurrentPage(currentPage + 2)}>{ currentPage + 2}</button>
            <button onClick={()=>changeCurrentPage(256)}>Last</button>
            <button
                style={{display: (currentPage===256) ? 'none' : 'inline'}}
                onClick={()=>changeCurrentPage(currentPage + 1)}>
                Next
            </button>
        </div>
    )
}

export default PlantsPageSelect