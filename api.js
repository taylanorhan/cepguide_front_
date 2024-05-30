import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: "Network error or no response" };
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: "Network error or no response" };
  }
};
