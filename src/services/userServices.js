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

const createProfile = async (data, token) => {
    try {
        const response = await axios.post(`${USER_API}/crerate-profile`, data, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response;
    } catch (error) {
        throw error.reponse.data.message;
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

const getAccountDetails = async (token) => {
    try {
        const response = await axios.get(`${USER_API}/account-details`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message;
    }
};

const updateProfile = async (data, token) => {
    try {
        const reponse = await axios.put(`${USER_API}/update-profile`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return reponse.data;
    } catch (error) {
        throw error.response?.data?.message;
    }
};

const getSocialMediaLinks = async (token) => {
    try {
        const response = await axios.get(`${USER_API}/social-links`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message;
    }
};

const updateSocialLinks = async (data, token) => {
    try {
        const reponse = await axios.put(
            `${USER_API}/update-social-links`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return reponse.data;
    } catch (error) {
        throw error.response?.data?.message;
    }
};

const getCustomLinks = async (token) => {
    try {
        const response = await axios.get(`${USER_API}/custom-links`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message;
    }
};

const addCustomLink = async (data, token) => {
    try {
        const reponse = await axios.post(`${USER_API}/custom-links`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return reponse.data;
    } catch (error) {
        throw error.response?.data?.message;
    }
};

const updateCustomLink = async (data, token) => {
    try {
        const reponse = await axios.put(`${USER_API}/custom-links`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return reponse.data;
    } catch (error) {
        throw error.reponse?.data?.message;
    }
};

const deleteCustomLink = async (id, token) => {
    try {
        const reponse = await axios.delete(`${USER_API}/custom-links/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return reponse.data;
    } catch (error) {
        throw error.reponse.data.messages;
    }
};

const freezeAccount = async (token) => {
    try {
        const response = await axios.put(`${USER_API}/frozen`, null, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        throw error.response.data.message;
    }
};

const deleteAccount = async (token) => {
    try {
        const reponse = await axios.delete(`${USER_API}/account`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return reponse.data;
    } catch (error) {
        throw error.reponse.data.message;
    }
};

const changeBackgroundColor = async (token, backgroundColor) => {
    try {
        const response = await axios.put(
            `${USER_API}/background-color`,
            { backgroundColor },
            { headers: { Authorization: `Bearer ${token}` } }
        );

        return response.data;
    } catch (error) {
        throw error.reponse.data.message;
    }
};

const changeFont = async (token, font) => {
    try {
        const response = await axios.put(
            `${USER_API}/font`,
            { font },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        return response.data;
    } catch (error) {
        throw error.reponse.data.message;
    }
};

export {
    getUsername,
    chooseUsername,
    preChooseUsername,
    createProfile,
    getUserProfile,
    getAccountDetails,
    updateProfile,
    updateSocialLinks,
    getSocialMediaLinks,
    getCustomLinks,
    addCustomLink,
    updateCustomLink,
    deleteCustomLink,
    freezeAccount,
    deleteAccount,
    changeBackgroundColor,
    changeFont,
};
