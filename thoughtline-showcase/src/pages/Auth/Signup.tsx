import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Auth/Auth.css";
import logo from "../../assets/images/logo.svg";

const Signup = () => {
  const navigate = useNavigate();

  // User details state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // OTP flow state
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Logic: 1. Call API to register user and send OTP email
    console.log("Registering and sending OTP to:", email);
    
    // 2. Show the OTP input field
    setShowOtp(true);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Logic: Call API to verify OTP
    console.log("Verifying OTP:", otp);

    // After successful verification → redirect to login
    alert("Account verified successfully!");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <img src={logo} alt="TLD Atlas Logo" className="auth-logo" />
        
        {!showOtp ? (
          <>
            <h2>Create your account</h2>
            <form onSubmit={handleSignupSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
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
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button type="submit">Send Verification Code</button>
            </form>
          </>
        ) : (
          <>
            <h2>Verify your Email</h2>
            <p>We've sent a code to <strong>{email}</strong></p>
            <form onSubmit={handleVerifyOtp}>
              <input
                type="text"
                placeholder="Enter 6-digit code"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                style={{ textAlign: 'center', fontSize: '1.2rem', letterSpacing: '4px' }}
              />
              <button type="submit" className="verify-btn">Verify & Sign Up</button>
              <button 
                type="button" 
                className="back-btn" 
                onClick={() => setShowOtp(false)}
                style={{ background: 'none', color: '#666', marginTop: '10px' }}
              >
                Change Email
              </button>
            </form>
          </>
        )}

        <p className="signup-link">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;