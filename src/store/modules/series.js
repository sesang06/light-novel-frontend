import { createAction, handleActions } from 'redux-actions';
import * as api from '../../lib/api';
import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

const GET_SERIES_LIST = 'series/GET_SERIES_LIST';
const ADD_SERIES_CATEGORIES = 'series/ADD_SERIES_CATEGORIES';
const DELETE_SERIES_CATEGORIES = 'series/DELETE_SERIES_CATEGORIES';

export const getSeriesList = createAction(GET_SERIES_LIST, api.getSeriesList);
export const addSeriesCategories = createAction(ADD_SERIES_CATEGORIES, api.addSeriesCategories);
export const deleteSeriesCategories = createAction(DELETE_SERIES_CATEGORIES, api.deleteSeriesCategories);


const initalState = Map({
    seriesList: List(),
    lastPage: 0
});

export default handleActions({
    ...pender({
        type: GET_SERIES_LIST,
        onSuccess: (state, action) => {
            const data = fromJS(action.payload.data).get('data');
            const seriesList = data.get('list');
            const lastPage = data.get('last_page');
            return state
                .set('seriesList', seriesList)
                .set('lastPage', lastPage);
        }
    }),
    ...pender({
        type: ADD_SERIES_CATEGORIES,
    }),
    ...pender({
        type: DELETE_SERIES_CATEGORIES,
    })
}, initalState);