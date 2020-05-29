import React, {useState} from "react";
import s from './Pagination.module.css';

const Pagination = (props) => {
    let btnArray = [];
    let pageCount = Math.ceil(props.totalCount / props.pageSize); //Всего кнопок

    for (let i = 1; i <= pageCount; i++) {
        btnArray.push(i);
    }
    let portionsCount = Math.ceil(pageCount / props.portions);// Колл-во порций
    let [pageNumber, setPageNumber] = useState(1);
    let leftPortionsPageNumber = (pageNumber - 1) * props.portions + 1;
    let rightPortionsPageNumber = pageNumber * props.portions;
    let btnsList = btnArray
        .filter(p => p >= leftPortionsPageNumber && p <= rightPortionsPageNumber)
        .map(btn => {
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


    let handlePrevBtn = () => {
        setPageNumber(pageNumber - 1);
    }
    let handleNextBtn = () => {
        setPageNumber(pageNumber + 1);
    }

    return(
        <div>
            {pageNumber > 1 && <button className={'main-btn prev'} onClick={handlePrevBtn}>Prev</button>}
            {btnsList}
            {!(pageNumber === portionsCount) && <button className={'main-btn next'} onClick={handleNextBtn}>Next</button>}
        </div>
    )
}

export default Pagination;