import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Signup = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        "http://localhost:3001/auth/parentFormSubmit",
        {
          formData,
        }
      );

      console.log("Parent account updated:", response.data);
      alert("register successfuly");
      navigate("/auth");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <section className="spmanage login">
      <div className="wrapper">
        <form onSubmit={handleSubmit} className="low">
          <h2 className="log">SIGN UP :</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">password:</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="soso6">
            SIGN IN
          </button>
        </form>
      </div>
    </section>
  );
};
