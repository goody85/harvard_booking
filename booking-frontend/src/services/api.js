// src/services/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export const loginUser = (email, password) => api.post('/auth/login', { email, password });
export const registerUser = (name, email, password) => api.post('/auth/register', { name, email, password });
export const getFacilities = () => api.get('/facilities');
export const createBooking = (bookingData) => api.post('/bookings', bookingData);

export default api;
