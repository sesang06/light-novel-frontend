import React, { useCallback } from 'react';
import cn from 'classnames';

const CategoryItem = ({category, onDelete}) => {

    const title = category.get('title');
    const onClick = useCallback(
        e => {
            onDelete(title)
            e.preventDefault();
        },
        [onDelete, title],
    );

    return (
        <div>
            <div>
                <p>{category.get('title')}</p>
            </div>
            <div>
                <button onClick={onClick}>제거</button>
            </div>
        </div>
    );
};

export default CategoryItem;