import { createAsyncThunk } from '@reduxjs/toolkit';

export const getWeather = createAsyncThunk('getWeather', async (prams) => {
    const result = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${prams[0]}&q=${prams[1]}&days=7&aqi=no&alerts=no`)
        .then()
        .catch((error) => {
            console.error("ERROR fetching API data: ", error);
            throw error;
        });
    const data = await result.json()
        .then()
        .catch((error) => {
            console.error("ERROR parsing API data: ", error);
            throw error;
        });
    console.log(data);
    return data;
})
