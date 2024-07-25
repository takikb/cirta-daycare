import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../compnent/navbar";
import "../css/Home.css";

export const Login = ({ onLogin }) => {
  const [_, setCookies] = useCookies(["access_token"]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });

      setCookies("access_token", result.data.token);
      const userID = result.data.userID;
      const username2 = result.data.username;
      onLogin(userID, username2);
      window.localStorage.setItem("userID", result.data.userID);
      window.localStorage.setItem("username", result.data.username);
      navigate("/");
    } catch (error) {
      console.error(error.response.data.error);
      alert(error.response.data.error);
    }
  };

  return (
    <section className="spmanage login">
      {window.location.pathname !== "/signup" && <Navbar />}
      <div className="wrapper">
        <form onSubmit={handleSubmit} className="lowr">
          <h2 className="log">Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit" className="soso6">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};
