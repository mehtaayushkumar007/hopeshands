import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

import { loginUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


   const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = await loginUser(formData);

    setUser(data.user);

    alert("Login Successful");

    navigate("/dashboard");

  } catch (error) {
    alert(error.response?.data?.message || "Login Failed");
  }
};

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>Welcome Back 👋</h1>

        <p className="subtitle">
          Login to continue helping people through HopeHands.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button className="login-btn1">
            Login
          </button>

        </form>

       <div className="login-footer">
  <p>
    Don't have an account?{" "}
    <Link to="/register" className="register-link">
      Register
    </Link>
  </p>
</div>

      </div>
    </div>
  );
}