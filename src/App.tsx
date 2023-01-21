import React from "react";
import LandingPage from "./pages/LandingPage";
import UrlHandler from "./pages/UrlHandler";
import { Routes, Route } from "react-router-dom";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<UrlHandler />} />
    </Routes>
  );
}
