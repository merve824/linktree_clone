import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
};

const userSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        showLoading(state) {
            state.isLoading = true;
        },
        hideLoading(state) {
            state.isLoading = false;
        },
    },
});

export const { showLoading, hideLoading } = userSlice.actions;
export default userSlice.reducer;
