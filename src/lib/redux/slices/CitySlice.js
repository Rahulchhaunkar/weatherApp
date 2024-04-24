import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cityName: "",
  weather: {
    windSpeed: 0,
    temperature: 0,
    humidity: 0,
  },
};
const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCityName: (state, action) => {
      state.cityName = action.payload;
      state.weather.windSpeed = Math.random() * 10;
      state.weather.temperature = Math.random() * 50;
      state.weather.humidity = Math.random() * 1000;
    },
  },
});

export const { setCityName } = citySlice.actions;
export { citySlice };
