import axios from 'axios';

// Create an axios instance
const api = axios.create({
  baseURL: 'http://172.16.22.35:9001/', // Your base URL
  timeout: 10000, // Optional: timeout for requests (in ms)
  headers: {
    'Content-Type': 'application/json', // Default content type for requests
  },
});

// Add a request interceptor to include the token in headers
api.interceptors.request.use(
    (config) => {
      // Get the token from localStorage (or sessionStorage, if that's where you store it)
      const token = localStorage.getItem('access_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      // Handle request errors
      return Promise.reject(error);
    }
  );


  // Add a response interceptor (optional)
api.interceptors.response.use(
    (response) => response, // Return the response data directly
    (error) => {
      // Check if the error is related to authentication (e.g., token expired)
      if (error.response?.status === 401) {
        console.error('Unauthorized: Redirecting to login...');
        // Optional: Redirect to login page
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );


  export default api;