import React, { Component } from 'react';
import SeriesList from '../../components/series/SeriesList';
import * as seriesActions from '../../store/modules/series';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Pagination from '../../components/series/Pagination/Pagination';


class Series extends Component {
    initialize = async () => {
        const { SeriesActions, page } = this.props;

        try {
            const offset = (page - 1) * 10;
            console.log(offset);
            await SeriesActions.getSeriesList({ offset });
        } catch (e) {
            console.log(e);
        }
    }

    componentDidMount() {
        this.initialize();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.page !== this.props.page) {
            this.initialize();
        }
    }

    render() {
        const { seriesList, lastPage, page } = this.props;
        return (
            <div>
                <SeriesList
                    seriesList={seriesList}
                />
                <Pagination
                    lastPage={lastPage}
                    page={page}
                />
            </div>
        )
    }
}

export default connect(
    (state) => ({
        seriesList: state.series.get('seriesList'),
        lastPage: state.series.get('lastPage')
    }),
    (dispatch) => ({
        SeriesActions: bindActionCreators(seriesActions, dispatch)
    })
)(Series);