import axios from 'axios';

const API = axios.create({
  baseURL: 'https://localhost:7001/api/', // Root API base
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optionally add token auth here
// API.interceptors.request.use(config => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export const apiRequest = async (method, url, data = {}, config = {}) => {
  try {
    const response = await API({
      method,
      url,
      data,
      ...config,
    });
    return response.data;
  } catch (error) {
    console.error(`API error on ${method.toUpperCase()} ${url}:`, error);
    throw error;
  }
};
