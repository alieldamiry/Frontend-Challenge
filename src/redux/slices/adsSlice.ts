import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  ads: [],
};

export const mainSlice = createSlice({
  name: "ads",
  initialState,
  reducers: {},
});

export default mainSlice.reducer;
