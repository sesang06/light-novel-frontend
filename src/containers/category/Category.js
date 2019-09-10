import React, { Component } from 'react';
import CategoryList from '../../components/category/CategoryList';
import CategoryInsert from '../../components/category/CategoryInsert';
import * as getCategoryActions from '../../store/modules/category';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Category extends Component {


    initialize = async () => {
        const { GetCategoryActions } = this.props;

        try {
            await GetCategoryActions.getCategory();
        } catch (e) {
            console.log(e);
        }
    }

    componentDidMount() {
        this.initialize();
    }

    onInsert = async (title) => {
        const { GetCategoryActions } = this.props;
        try {
            await GetCategoryActions.insertCategory({ title });
            await GetCategoryActions.getCategory();
        } catch (e) {
            console.log(e);
        }
    };


    onDelete = async (title) => {
        const { GetCategoryActions } = this.props;
        try {
            await GetCategoryActions.deleteCategory({ title });
            await GetCategoryActions.getCategory();
        } catch (e) {
            console.log(e);
        }
    };

    render() {
        const { categories } = this.props;

        return (
            <div>
                <CategoryInsert onInsert={this.onInsert} />
                <CategoryList
                    onDelete={this.onDelete}
                    categories={categories} />
            </div>
        )
    }
}

export default connect(
    (state) => ({
        categories: state.category.get('categories')
    }),
    (dispatch) => ({
        GetCategoryActions: bindActionCreators(getCategoryActions, dispatch)
    })
)(Category);