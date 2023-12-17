import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../hooks/userSlice';
import leadReducer from '../hooks/leadSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        leads: leadReducer
    },
});