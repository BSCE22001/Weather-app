// const getCity = () => {
//         navigator.geolocation.getCurrentPosition(position => {
//         let result = cityApi(position.coords.latitude, position.coords.longitude);
//         return async (getCity) => getCity({
//             city: result.city,
//             type: "city"
//         })
//     })
// }

// const cityApi = async (lat, long) => {
//     const result = await fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${long}&api_key=66a8a03d72e2e957191000xlmbfa65d`);
//     const data = await result.json();
//     return data;
// }


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
