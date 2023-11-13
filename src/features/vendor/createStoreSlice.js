import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isCreated: false,
  isError: "",
};

export const createStore = createAsyncThunk(
  "createstore/createStore",
  async (formData) => {
    console.log(formData);
    try {
      const url = "http://localhost:6200/store";
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response);
      console.log(response.status);
      console.log(response.data.message);
      // return response.data;
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.message;
        throw new Error(errorMessage);
      } else {
        throw error;
      }
    }
  }
);

const createVendorStore = createSlice({
  name: "createstore",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createStore.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createStore.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isCreated = true;
        state.isError = "";
      })
      .addCase(createStore.rejected, (state, action) => {
        state.isLoading = false;
        state.isCreated = false;
        state.isError = action.error.message;
      });
  },
});

export default createVendorStore.reducer;
