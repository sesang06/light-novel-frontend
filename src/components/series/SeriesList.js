import React, { Component } from 'react';
import SeriesItem from './SeriesItem';
import { List } from 'immutable';

class SeriesList extends Component {
    render() {
        const { seriesList, categories, onCategoryChange } = this.props;
        return (
            <div>
                {seriesList.map(series => (
                    <SeriesItem
                        key={series.get('id')}
                        series={series}
                        categories={categories}
                        onCategoryChange={onCategoryChange}
                    />
                ))}
            </div>
        ) 
    }
}
SeriesList.defaultProps = {
    seriesList: List()
}


export default SeriesList;