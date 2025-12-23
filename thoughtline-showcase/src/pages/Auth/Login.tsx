import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Auth/Auth.css"; // import the CSS file
import logo from "../../assets/images/logo.png"; // app logo

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add authentication logic here
    console.log("Email:", email, "Password:", password);

    // On successful login, redirect to Home
    navigate("/home");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <img src={logo} alt="TLD Atlas Logo" className="auth-logo" />
        <h2>Login to TLD Atlas</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p className="signup-link">Don't have an account?{" "}
        <span onClick={() => navigate("/signup")}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
