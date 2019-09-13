import React, { useCallback } from 'react'
import { Map, List, mergeWith } from 'immutable';



const SeriesCategoryItem = ({ category, onAdd, onDelete }) => {

    const id = category.get('id');
    const title = category.get('title');
    const onChange = useCallback(
        e => {
            if (e.target.checked === true) {
                onAdd({ id, title });
            } else {
                onDelete({ id, title });
            }
        },
        [onAdd, onDelete, id, title],
    );

    return (
        <div>
            <input type="checkbox" defaultChecked={category.get('is_checked')} onChange={onChange} />
            {category.get('title')}
        </div>
    )
}

const SeriesCategoryList = ({ categories, allCategories, onAdd, onDelete }) => {

    const checkedCategories = Map(
        categories.map(category => {
            return [category.get('id'), category.set('is_checked', true)]
        })
    )

    const unCheckedCategories = Map(
        allCategories.map(category => {
            return [category.get('id'), category.set('is_checked', false)]
        })
    )

    const result = mergeWith(
        (_, newVal) => newVal,
        unCheckedCategories,
        checkedCategories
    ).toList()
    return (
        <div>
            {result.map(category => (
                <SeriesCategoryItem
                    category={category}
                    key={category.get('id')}
                    onAdd={onAdd}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}

export default SeriesCategoryList;