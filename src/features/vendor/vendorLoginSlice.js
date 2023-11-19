import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  accessToken: null,
  storeName: "",
  error: "",
};

export const loginVendorApi = createAsyncThunk(
  "vendorlogin/loginVendor",
  async (formData) => {
    console.log(formData);
    try {
      const url = "http://localhost:6200/auth";
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      if (error.response) {
        const errorMessage = error.response.data.message;
        throw new Error(errorMessage);
      } else {
        throw error;
      }
    }
  }
);

const loginVendorSlice = createSlice({
  name: "vendorlogin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginVendorApi.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginVendorApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.accessToken = action.payload.accessToken;
        state.storeName = action.payload.storeName;
        state.error = "";
      })
      .addCase(loginVendorApi.rejected, (state, action) => {
        state.isLoading = false;
        state.accessToken = null;
        state.storeName = "";
        state.error = action.error.message;
      });
  },
});

export default loginVendorSlice.reducer;
