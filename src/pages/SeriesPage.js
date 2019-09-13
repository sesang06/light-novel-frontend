import React from 'react';
import Series from '../containers/series/Series';
import PageTemplate from '../components/common/PageTemplate/PageTemplate';
import queryString from 'query-string';

const SeriesPage = ({ location }) => {
    const values = queryString.parse(location.search);
    const page = parseInt(values.page || 1, 10);
    const limit = parseInt(values.limit || 10, 10);
    return (
        <PageTemplate>
            시리즈
            <Series
                page={page}
                limit={limit}
            />
        </PageTemplate>
    )
}
export default SeriesPage;