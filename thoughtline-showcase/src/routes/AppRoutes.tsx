import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "../pages/Splash/Splash";
import Login from "../pages/Auth/Login"; // ✅ Import Login
import Signup from "../pages/Auth/Signup";
import Home from "../pages/Home/Home";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} /> {/* Splash route */}
        <Route path="/login" element={<Login />} /> {/* Login route */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

