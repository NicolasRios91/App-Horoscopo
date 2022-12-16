import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isLoading: false,
  sign: null,
};

export const horoscopeSlice = createSlice({
  name: "horoscope",
  initialState,
  reducers: {
    getHoroscopeFetch: (state, payload) => {
      state.isLoading = true;
    },
    getHoroscopeSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    updatedSign: (state, action) => {
      state.sign = action.payload;
    },
  },
});

export const { getHoroscopeFetch, getHoroscopeSuccess, updatedSign } =
  horoscopeSlice.actions;

export default horoscopeSlice.reducer;
