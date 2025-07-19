import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const AUTH_API = `${API_URL}/auth`;

const register = async (data) => {
    try {
        const response = await axios.post(`${AUTH_API}/register`, data);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message;
    }
};

const verifyOTP = async (data) => {
    try {
        const reponse = await axios.post(`${AUTH_API}/verify-otp`, data);
        return reponse;
    } catch (error) {
        console.log(error.response.data);
        throw error.response?.data?.message;
    }
};

const resendRegistrationOTP = async (email) => {
    try {
        const reponse = await axios.post(
            `${AUTH_API}/resend-register-otp`,
            email
        );
        return reponse;
    } catch (error) {
        throw error.response?.data?.message;
    }
};

const login = async (data) => {
    try {
        const reponse = await axios.post(`${AUTH_API}/login`, data);
        return reponse.data;
    } catch (error) {
        if (error.response?.status === 401) {
            throw 'Geçersiz e-posta veya şifre';
        } else if (error.response?.status === 404) {
            throw 'Kullanıcı bulunamadı';
        }
        throw error.response?.data?.message;
    }
};

export { register, verifyOTP, resendRegistrationOTP, login };
