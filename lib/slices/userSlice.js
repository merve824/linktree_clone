import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    registrationEmail: null,
    registrationUsername: null,
    registrationPhone: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
        },
        setRegistrationEmail(state, action) {
            state.registrationEmail = action.payload;
        },
        setRegistrationUsername(state, action) {
            state.registrationUsername = action.payload;
        },
        setRegistrationPhone(state, action) {
            state.registrationPhone = action.payload;
        },
        clear(state) {
            state.token = null;
            state.registrationEmail = null;
            state.registrationUsername = null;
        },
    },
});

export const {
    setToken,
    setRegistrationEmail,
    setRegistrationUsername,
    setRegistrationPhone,
    clear,
} = userSlice.actions;
export default userSlice.reducer;
