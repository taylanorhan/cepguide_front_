import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../../context/GlobalState";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      console.log("Login Successful:", response.data);
      setUser(response.data); // Kullanıcı bilgilerini context'e ekleyin
      navigate("/"); // Giriş başarılıysa ana sayfaya yönlendirin
    } catch (error) {
      if (error.response) {
        console.error("Login Error:", error.response.data);
      } else if (error.request) {
        console.error("Login Error: No response from server", error.request);
      } else {
        console.error("Login Error:", error.message);
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="actions">
          <button type="submit" className="login-button">
            Log In
          </button>
          <Link to="/forgot-password" className="forgot-password">
            Forgot my password?
          </Link>
        </div>
        <div className="register-link">
          <Link to="/register">
            <button className="item-btn">Register Here</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
