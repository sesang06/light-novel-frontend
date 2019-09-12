import React from 'react';

const SeriesItem = ({series}) => {

    return (
        <div>
            <div>
                <p>{series.get('title')}</p>
            </div>
            <div>
                <img src={series.get('thumbnail')}/>
            </div>
        </div>
    )
};

export default SeriesItem;