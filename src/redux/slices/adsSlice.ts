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

export const adSlice = createSlice({
  name: "ads",
  initialState,
  reducers: {
    createAd: (state, action) => {
      const { to_time, from_time, type, link } = action.payload;
      const newAd = {
        id: new Date().getTime(),
        image: type === "image" ? link : "",
        video: type === "video" ? link : "",
        from_time: new Date(from_time).toLocaleString(),
        to_time: new Date(to_time).toLocaleString(),
      };
      state.adsList.push(newAd);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdds.fulfilled, (state, action) => {
        state.status = "idle";
        const updatedAdsList = action.payload.map((ad: any, index: number) => ({
          id: new Date().getTime() + index,
          ...ad,
        }));

        state.adsList = updatedAdsList;
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

export const { createAd } = adSlice.actions;

export default adSlice.reducer;
