import axios from 'axios';

export const getCategory = () => axios.get('/api/category');
export const insertCategory = ({title}) => axios.post('/api/category/add', {title});
export const deleteCategory = ({title}) => axios.post('/api/category/delete', {title});