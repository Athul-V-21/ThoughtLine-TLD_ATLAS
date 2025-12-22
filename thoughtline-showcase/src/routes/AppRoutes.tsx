import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "../pages/Splash/Splash";
import Login from "../pages/Auth/Login"; // ✅ Import Login

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} /> {/* Splash route */}
        <Route path="/login" element={<Login />} /> {/* Login route */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
