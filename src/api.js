import axios from 'axios';

// API'nin temel URL'sini belirleyin
const API_BASE_URL = 'http://localhost:3000';

// Kullanıcı kayıt işlemi için bir fonksiyon
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/signup`, userData);
        console.log('Registration Success:', response.data);
        return response.data; // Başarılı yanıtı döndür
    } catch (error) {
        console.error('Registration Error:', error.response ? error.response.data : 'No response or network error');
        throw error.response ? error.response.data : { message: "Network error or no response" };
    }
};

// Kullanıcı giriş işlemi için bir fonksiyon
export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, userData);
        console.log('Login Success:', response.data);
        return response.data; // Başarılı yanıtı döndür
    } catch (error) {
        console.error('Login Error:', error.response ? error.response.data : 'No response or network error');
        throw error.response ? error.response.data : { message: "Network error or no response" };
    }
};
