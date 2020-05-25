import React from "react";
import s from './Pagination.module.css';

const Pagination = (props) => {
    let createArray = (firstBtn) => {
        let result = [];
        for(let i = 1; i <= 10; i++) {
            result.push(firstBtn++);
            console.log(i);
        }
        return result;
    };
    let btnsList = createArray(10).map(btn => {
        return (
            <span
                key={btn}
                className={btn === props.currentPage ? `${s.btn} ${s.btn_act}` : `${s.btn}`}
                onClick={() => props.changePage(btn)}
            >
                {btn}
            </span>
        )
    });


    let handleNextBtn = () => {

    }
    return(
        <div>
            <button className={'main-btn'} onClick={handleNextBtn}>Prev</button>
            {btnsList}
            <button className={'main-btn'}>Next</button>
        </div>
    )
}

export default Pagination;