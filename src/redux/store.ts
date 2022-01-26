import { configureStore } from "@reduxjs/toolkit";
import ads from "./slices/adsSlice";

export const store = configureStore({
  reducer: {
    ads,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
