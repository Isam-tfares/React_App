export const env = {
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1',
  MODE: import.meta.env.MODE,
  APP_NAME: process.env.REACT_APP_NAME || 'Enterprise Management System',
};