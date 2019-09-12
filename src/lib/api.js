import axios from 'axios';
import queryString from 'query-string'

export const getCategory = () => axios.get('/api/category');
export const insertCategory = ({title}) => axios.post('/api/category/add', {title});
export const deleteCategory = ({title}) => axios.post('/api/category/delete', {title});

export const getSeriesList = ({offset}) => {
    const query = queryString.stringify({
        offset
    });
    return axios.get(`/api/light_novel_series?${query}`)
};