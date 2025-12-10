import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const getCars = async () => {
    try {
        const response = await axios.get(`${API_URL}/cars`);
        return response.data;
    } catch (error) {
        console.error("Error fetching cars:", error);
        return [];
    }
};

export const getCarById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/cars/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching car detail:", error);
        return null;
    }
};