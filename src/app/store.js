import { configureStore } from "@reduxjs/toolkit";
import createStoreReducer from "../features/vendor/createStoreSlice";
import loginVendorReducer from "../features/vendor/vendorLoginSlice";

const store = configureStore({
  reducer: {
    createstore: createStoreReducer,
    vendorlogin: loginVendorReducer,
  },
});

export default store;
