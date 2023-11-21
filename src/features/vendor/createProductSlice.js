import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isCreated: false,
  data: null,
  isError: "",
};

export const createProduct = createAsyncThunk(
  "createproduct/createProduct",
  async (formData) => {
    try {
      const url = "http://localhost:6200/create-product";
      const response = axios.post(url, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
        withCredentials: true,
      });

      console.log(response);
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

const createNewProduct = createSlice({
  name: "createproduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isCreated = true;
        state.data = action.payload;
        state.isError = "";
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isCreated = false;
        state.data = null;
        state.isError = action.error.message;
      });
  },
});

export default createNewProduct.reducer;
