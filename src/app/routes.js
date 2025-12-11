import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Socialicons } from "../components/socialicons";

function AppRoutes() {
  return (
    <div className="s_c">
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
