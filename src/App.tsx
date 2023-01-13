import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<p>Futur Page Generator</p>} />
    </Routes>
  );
}
