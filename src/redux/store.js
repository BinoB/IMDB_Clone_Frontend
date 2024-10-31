import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/auth/authSlice"
import actorReducer from "../redux/features/actor/actorSlice"
import producerReducer from "../redux/features/producer/producerSlice"
// import filterReducer from '../redux/features/actor/filterSlice'

export const store = configureStore({
	reducer: {
		auth: authReducer,
    actor : actorReducer,
    producer : producerReducer,
    // filter: filterReducer,
    },
    
    
})