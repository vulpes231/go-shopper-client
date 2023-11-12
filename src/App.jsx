import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, Error } from "./components";

import { VendorSignup, VendorLogin } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} errorElement={<Error />} />
      <Route path="/vendor" element={<VendorLogin />} />
      <Route path="/signup" element={<VendorSignup />} />
    </Routes>
  );
};

export default App;
