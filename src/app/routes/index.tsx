import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../../mainPage";

const AppRouter: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
