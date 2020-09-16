import React from 'react'

const PlantsPageSelect = ({ page, changePage }) => {
    return (
        <div plants__page-buttons>
            <button
                style={{display: (page===1) ? 'none' : 'inline'}}
                onClick={()=>changePage(page - 1)}>
                Previous
            </button>
            <button onClick={()=>changePage(1)}>First</button>
            <button onClick={()=>changePage(page)}>{ page }</button>
            <button onClick={()=>changePage(page + 1)}>{ page + 1}</button>
            <button onClick={()=>changePage(page + 2)}>{ page + 2}</button>
            <button onClick={()=>changePage(256)}>Last</button>
            <button
                style={{display: (page===256) ? 'none' : 'inline'}}
                onClick={()=>changePage(page + 1)}>
                Next
            </button>
        </div>
    )
}

export default PlantsPageSelect