import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import LandingPage from "./pages/LandingPage";
import Signin from "./pages/Signin";
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
