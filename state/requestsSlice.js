import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  fetched: false,
  requests: null,
};

const requestsSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    requests: (state, action) => {
      state.fetched = true;
      state.requests = action.payload;
    },
  },
});
export const { requests } = requestsSlice.actions;
export default requestsSlice.reducer;
