import { createAction, handleActions } from 'redux-actions';
import * as api from '../../lib/api';
import { Map, List, fromJS } from 'immutable';
import { pender } from  'redux-pender';

const GET_CATEGORY = 'category/GET_CATEGORY';
const INSERT_CATEGORY = 'category/INSERT_CATEGORY';
const DELETE_CATEGORY = 'category/DELETE_CATEGORY';

export const getCategory = createAction(GET_CATEGORY, api.getCategory);
export const insertCategory = createAction(INSERT_CATEGORY, api.insertCategory);
export const deleteCategory = createAction(DELETE_CATEGORY, api.deleteCategory);

const initalState = Map({
    categories: List()
});

export default handleActions({
    ...pender({
        type: GET_CATEGORY,
        onSuccess: (state, action) => {
            const { data: categories } = action.payload;
            return state.set('categories', fromJS(categories).get('data').get('categories')); 
        }
    }),
    ...pender({
        type: INSERT_CATEGORY
    }),
    ...pender({
        type: DELETE_CATEGORY
    }),

}, initalState);