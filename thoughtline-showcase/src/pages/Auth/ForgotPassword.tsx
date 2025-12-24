import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Auth/Auth.css";
import logo from "../../assets/images/logo.png";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Reset link sent to:", email);

    // Later: backend email logic
    navigate("/reset-password");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <img src={logo} alt="TLD Atlas Logo" className="auth-logo" />
        <h2>Forgot Password</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">Send Reset Link</button>
        </form>

        <p className="signup-link">
          Back to{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
