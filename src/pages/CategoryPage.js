import React from 'react';
import Category from '../containers/category/Category';
import PageTemplate from '../components/common/PageTemplate/PageTemplate';

const CategoryPage = () => {
    return (
        <PageTemplate>
            카테고리
            <Category/>
        </PageTemplate>
    )
}
export default CategoryPage;