import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Splash.css"; // import the CSS file

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home"); // redirect after 2 seconds
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <div className="logo">
        <h1>TLD Atlas</h1>
      </div>
      <div className="loader"></div>
    </div>
  );
};

export default Splash;
