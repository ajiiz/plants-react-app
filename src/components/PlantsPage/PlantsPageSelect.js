import React from 'react'

const PlantsPageSelect = ({ page, changePage }) => {
    return (
        <div plants__page-buttons>
            <button onClick={()=>changePage(1)}>First</button>
            <button onClick={()=>changePage(page - 1)}>&lt;-</button>
            <button onClick={()=>changePage(page)}>{ page }</button>
            <button onClick={()=>changePage(page + 1)}>{ page + 1}</button>
            <button onClick={()=>changePage(page + 2)}>{ page + 2}</button>
            <button onClick={()=>changePage(page + 1)}>-&gt;</button>
            <button>Last</button>
        </div>
    )
}

export default PlantsPageSelect