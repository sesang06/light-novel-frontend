import React, { useState, useCallback } from 'react';


const CategoryInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <form onSubmit={onSubmit}>
            <input
                placeholder="카테고리 추가"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                추가
            </button>
        </form>
    )

}

export default CategoryInsert;