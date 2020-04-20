import React from "react";
import s from './Pagination.module.css';

const Pagination = (props) => {
    let createArray = (from, to) => {
        let result = [];
        for (let i = from; i <= to; i++) {
            result.push(i);
        }
        return result;
    }
    let btnsList = createArray(1, props.quantityBtn).map(btn => {
        return (
            <span
                key={btn}
                className={btn === props.currentPage ? `${s.btn} ${s.btn_act}` : `${s.btn}`}
                onClick={() => props.changePage(btn)}
            >
                {btn}
            </span>
        )
    })
    return(
        <div>
            {btnsList}
        </div>
    )
}

export default Pagination;