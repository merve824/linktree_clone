import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const USER_API = `${API_URL}/user`;

const getUsername = async (token) => {
    try {
        const response = await axios.get(`${USER_API}/username`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        // err
    }
};

const preChooseUsername = async (data, token) => {
    try {
        const response = await axios.post(
            `${USER_API}/pre-choose-username`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        throw error.response?.data?.message;
    }
};

const chooseUsername = async (data, token) => {
    try {
        const response = await axios.post(`${USER_API}/choose-username`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message;
    }
};

const getUserProfile = async (username) => {
    try {
        const response = await axios.get(`${USER_API}/profile/${username}`);
        return response.data;
    } catch (error) {
        // err
    }
};

export { getUsername, chooseUsername, preChooseUsername, getUserProfile };
