import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import { List } from 'immutable';


class CategoryList extends Component {
    render() {
        const { categories, onDelete } = this.props;
        return (
            <div>
                {categories.map(category => (
                    <CategoryItem
                        key={category.get('id')}
                        category={category}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        )
    }
}
CategoryList.defaultProps = {
    categories: List()
}

export default CategoryList;