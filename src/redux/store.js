import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/auth/authSlice"

export const store = configureStore({
	reducer: {
		auth: authReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     serializableCheck: false,
    // }),
    // devTools: process.env.NODE_ENV!== 'production',
    
})