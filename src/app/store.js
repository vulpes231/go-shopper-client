import { configureStore } from "@reduxjs/toolkit";
import createStoreReducer from "../features/vendor/createStoreSlice";
import loginVendorReducer from "../features/vendor/vendorLoginSlice";
import createProductReducer from "../features/vendor/createProductSlice";

const store = configureStore({
  reducer: {
    createstore: createStoreReducer,
    vendorlogin: loginVendorReducer,
    createproduct: createProductReducer,
  },
});

export default store;
