import axios from "axios";

// Function to create Axios instance with default configurations
const createAxiosInstance = () => {
  const instance = axios.create({
    timeout: 10000, // 10 seconds timeout
  });

  // Request interceptor
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export default createAxiosInstance;
