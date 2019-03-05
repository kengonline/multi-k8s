import axios from 'axios';

export const getValues = () => axios.get('/api/values/current');

export const getIndexes = () => axios.get('/api/values/all');

export const addIndex = (index) => axios.post('/api/values', { index });