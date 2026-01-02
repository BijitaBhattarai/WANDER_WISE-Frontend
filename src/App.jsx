import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
