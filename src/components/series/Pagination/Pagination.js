import React from 'react';
import { Range } from 'immutable';
import { Link } from 'react-router-dom';

const PageButton = ({ page }) => {
    return (
        <div>
            <Link to={`series?page=${page}`}>{page}</Link>
        </div>
    )
}

const Pagination = ({ page, lastPage }) => {

    const startCurrentPage = Math.max(Math.ceil(page / 10 - 1) * 10, 1);
    const lastCurrentPage = Math.min(Math.ceil(page / 10) * 10 + 1, lastPage);
    const range = Range(startCurrentPage, lastCurrentPage + 1);
    return (
        <div>
            <div>
                <p>현재 {page} 페이지</p>
                <p>전체 {lastPage} 페이지
                {startCurrentPage} {lastCurrentPage}</p>
            </div>
            <div>
                {
                    range.map(value => (
                        <PageButton key={value} page={value} />
                    ))
                }

            </div>
        </div>
    )

}
export default Pagination; 