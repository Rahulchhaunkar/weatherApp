import { configureStore } from "@reduxjs/toolkit";
import { citySlice } from "./slices/CitySlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: { [citySlice.name]: citySlice.reducer },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});

setupListeners(store.dispatch);

export { setCityName } from "./slices/CitySlice";
