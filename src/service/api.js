import axios from 'axios';

const BASE_URL = "https://mern-backend2-1.onrender.com";

export const authenticateSignup = async (data) => {
    try{
        return await axios.post(`${BASE_URL}/signup`, data);
    } catch (error){
        console.log(`Error while calling signup api`, error);
    }
}

export const authenticateLogin = async (data) => {
    try{
        return await axios.post(`${BASE_URL}/login`, data);
    } catch (error){
        console.log(`Error while calling login api`, error);
        return error.response;
    }
}

export const getProductById = async (id) => {
    try {
        return await axios.get(`${BASE_URL}/product/${id}`);
    } catch (error) {
        console.log('Error while getting product by id response', error);
    }
}

