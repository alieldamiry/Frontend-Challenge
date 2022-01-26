import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAdds = createAsyncThunk("/fetchAdds", async () => {
  const response = await axios.get("/data.json");
  return response.data;
});

interface stateInterface {
  status: "idle" | "error" | "loading";
  error: any;
  adsList: {
    image: string;
    video: string;
    from_time: string;
    to_time: string;
  }[];
}
const initialState: stateInterface = {
  status: "idle",
  error: null,
  adsList: [],
};

export const mainSlice = createSlice({
  name: "ads",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdds.fulfilled, (state, action) => {
        state.status = "idle";
        state.adsList = action.payload;
      })
      .addCase(fetchAdds.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAdds.rejected, (state, action: any) => {
        state.status = "error";
        state.error = action.payload.data;
      });
  },
});

export default mainSlice.reducer;
