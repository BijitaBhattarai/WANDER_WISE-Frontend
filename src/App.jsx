import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import LandingPage from "./pages/LandingPage";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import useAuth from "./hooks/useAuth";
import { jwtDecode } from "jwt-decode";
import AppLayout from "./components/layouts/AppLayout";

export default function App() {
  const { token, logout } = useAuth();
  const decodedToken = token ? jwtDecode(token) : null;

  console.log(decodedToken);
  const ProtectedRoutes = () => {
    {
      try {
        const decodedToken = token ? jwtDecode(token) : null;
        const userId = decodedToken?.userId;
        if (decodedToken && decodedToken?.exp) {
          const currentTime = Date.now();
          if (decodedToken.exp < currentTime / 1000) {
            logout();
            return <Navigate to="/signin" />;
          }
        }
        if (!userId) {
          logout();
          return <Navigate to="/signin" />;
        }
        return <AppLayout />;
      } catch (error) {
        console.error(err);
        logout();
        return <Navigate to="/signin" />;
      }
    }
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
