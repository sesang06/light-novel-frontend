import React from 'react';
import Series from '../containers/series/Series';
import queryString from 'query-string';

const SeriesPage = ({location}) => {
    const values = queryString.parse(location.search);
    const page = parseInt(values.page || 1, 10);
    return (
        <div>
            시리즈
            <Series page={page}/>
        </div>
    )
}
export default SeriesPage;