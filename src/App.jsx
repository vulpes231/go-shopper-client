import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, Error } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} errorElement={<Error />} />
    </Routes>
  );
};

export default App;
