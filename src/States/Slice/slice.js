import { createSlice } from "@reduxjs/toolkit";
import { getWeather } from "../Action Creators/actions";

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    
    extraReducers: (builder) => {
        builder.addCase(getWeather.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
        })
        builder.addCase(getWeather.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.isError = false;
        })
        builder.addCase(getWeather.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            console.error("ERROR: ", action.payload);
        })
    }
})

export default weatherSlice.reducer;