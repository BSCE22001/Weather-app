import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from '../Slice/slice'

export const weatherStore = configureStore({ 
        reducer: {
            weather: weatherReducer,
        }, 
});
