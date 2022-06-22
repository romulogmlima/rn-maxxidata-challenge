import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000',
});

export const api = {
  get: async (url, params = {}) => {
    try {
      const response = await axiosClient.get(url, { params });
      return response.data;
    } catch (error) {
      console.error('Looks like there was a problem: ', error);
    }
  },
  post: async (url, params) => {
    try {
      const response = await axiosClient.post(url, params);
      return response.data;
    } catch (error) {
      console.error('Looks like there was a problem: ', error);
    }
  },
  put: async (url, params) => {
    try {
      const response = await axiosClient.put(url, params);
      return response.data;
    } catch (error) {
      console.error('Looks like there was a problem: ', error);
    }
  },
  delete: async (url, params = {}) => {
    try {
      const response = await axiosClient.delete(url, { params });
      return response.data;
    } catch (error) {
      console.error('Looks like there was a problem: ', error);
    }
  },
};
