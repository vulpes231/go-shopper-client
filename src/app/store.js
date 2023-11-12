import { configureStore } from "@reduxjs/toolkit";
import createStoreReducer from "../features/vendor/createStoreSlice";

const store = configureStore({
  reducer: {
    createstore: createStoreReducer,
  },
});

export default store;
