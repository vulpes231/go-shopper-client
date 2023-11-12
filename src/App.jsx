import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, Error } from "./components";
import VendorLogin from "./pages/VendorLogin";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} errorElement={<Error />} />
      <Route path="/vendor" element={<VendorLogin />} />
    </Routes>
  );
};

export default App;
