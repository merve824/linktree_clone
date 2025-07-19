import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    registrationEmail: null,
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
        clear(state) {
            state.token = null;
            state.registrationEmail = null;
        },
    },
});

export const { setToken, setRegistrationEmail, clear } = userSlice.actions;
export default userSlice.reducer;
