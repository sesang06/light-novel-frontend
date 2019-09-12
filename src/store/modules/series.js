import { createAction, handleActions } from 'redux-actions';
import * as api from '../../lib/api';
import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

const GET_SERIES_LIST = 'series/GET_SERIES_LIST';

export const getSeriesList = createAction(GET_SERIES_LIST, api.getSeriesList);

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
    })
}, initalState);