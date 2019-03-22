import axios from 'axios';

export const getValues = () => axios.get('https://api.bookstore.business/values/current');

export const getIndexes = () => axios.get('https://api.bookstore.business/values/all');

export const addIndex = (index) => axios.post('https://api.bookstore.business/values', { index });