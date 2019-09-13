import React, { Component } from 'react';
import SeriesList from '../../components/series/SeriesList';
import * as seriesActions from '../../store/modules/series';
import * as getCategoryActions from '../../store/modules/category';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Pagination from '../../components/series/Pagination/Pagination';
import { Map } from 'immutable';


class Series extends Component {


    constructor(props) {
        super(props)
        this.state = {
            categoryAction: Map()
        }
    }


    initialize = async () => {
        const { SeriesActions, GetCategoryActions, page } = this.props;

        try {
            const offset = (page - 1) * 10;
            await SeriesActions.getSeriesList({ offset });
            await GetCategoryActions.getCategory();
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

    onCategoryChange = ({ id, addCategories, deleteCategories }) => {
        const categoryAction = this.state.categoryAction
        if (addCategories.isEmpty() && deleteCategories.isEmpty()) {
            this.setState({
                categoryAction: categoryAction.remove(id)
            }, () => console.log(this.state));

        } else {
            this.setState({
                categoryAction: categoryAction.set(id, Map({
                    'addCategories': addCategories,
                    'deleteCategories': deleteCategories
                }))
            }, () => console.log(this.state));
        }
    }

    onSubmit = async (e) => {
        const { SeriesActions } = this.props;

        e.preventDefault();
        const { categoryAction } = this.state;
        const promises = []
        categoryAction.entrySeq().forEach( async (e) => {
            const id = e[0];
            const value = e[1];
  
            const addCategories = value.get('addCategories');
            const deleteCategories = value.get('deleteCategories');

            if (!addCategories.isEmpty()) {
                const titles = addCategories.reduce((r, n) => `${r},${n}`, "").substring(1);
                try {
                    promises.push(SeriesActions.addSeriesCategories({titles, id}));
                } catch (e) {
                    console.log(e);
                }
            }
            if (!deleteCategories.isEmpty()) {
                const titles = deleteCategories.reduce((r, n) => `${r},${n}`, "").substring(1);
                try {
                    promises.push(SeriesActions.deleteSeriesCategories({titles, id}));
                } catch (e) {
                    console.log(e);
                }
            }
        }
        
        )
        await Promise.all(promises);
        window.location.reload();
        
    }


    render() {
        const { seriesList, lastPage, page, categories } = this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <button type="submit">
                        카테고리 변경
                    </button>
                </form>
                <SeriesList
                    seriesList={seriesList}
                    categories={categories}
                    onCategoryChange={this.onCategoryChange}
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
        lastPage: state.series.get('lastPage'),
        categories: state.category.get('categories')
    }),
    (dispatch) => ({
        SeriesActions: bindActionCreators(seriesActions, dispatch),
        GetCategoryActions: bindActionCreators(getCategoryActions, dispatch)
    })
)(Series);