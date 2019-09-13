import axios from 'axios';
import queryString from 'query-string'

export const getCategory = () => axios.get('/api/category');
export const insertCategory = ({title}) => axios.post('/api/category/add', {title});
export const deleteCategory = ({title}) => axios.post('/api/category/delete', {title});

export const getSeriesList = ({offset, limit}) => {
    const query = queryString.stringify({
        offset,
        limit
    });
    return axios.get(`/api/light_novel_series?${query}`)
};
export const addSeriesCategories = ({id, titles}) => axios.post(`/api/light_novel_series/${id}/category/adds`, {titles});
export const deleteSeriesCategories = ({id, titles}) => axios.post(`/api/light_novel_series/${id}/category/deletes`, {titles});