import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isCreated: false,
  isError: "",
  showModal: false,
};

export const createStore = createAsyncThunk(
  "createstore/createStore",
  async (formData) => {
    try {
      const url = "http://localhost:6200/create-store";
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
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
  reducers: {
    toggleModal: (state) => {
      state.showModal = !state.showModal;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createStore.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createStore.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = "";
        state.isCreated = true;
        state.showModal = true;
      })
      .addCase(createStore.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
        state.isCreated = false;
        state.showModal = false;
      });
  },
});

export const { toggleModal, toggleIsCreated } = createVendorStore.actions;

export default createVendorStore.reducer;
