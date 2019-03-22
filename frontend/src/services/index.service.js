import axios from 'axios';

export const getValues = () => axios.get('api.bookstore.business/values/current');

export const getIndexes = () => axios.get('api.bookstore.business/values/all');

export const addIndex = (index) => axios.post('api.bookstore.business/values', { index });