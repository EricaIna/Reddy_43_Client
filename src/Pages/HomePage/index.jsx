import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./HomePage.css";

import { motion } from "framer-motion";
import GenrePage from "../GenrePage";

import UpcomingPage from "../UpcomingPage";

const HomePage = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  };

  return (
    <div className="homePage">
      <div className="background-container">
        {/* <h1 className="neon-text">
          THE MOVIES
        </h1> */}
        <div className="background">
          <h5 className="homepage-h5">
            {/* A web site for everyone, with something for anyone */}
          </h5>
          <div className="btn-area">
            <motion.button
              className="mainPage-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/register">discover</Link>
            </motion.button>
            <motion.button
              className="mainPage-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isLoggedIn ? (
            <p className="logout" onClick={handleLogout}>Logout</p>
          ) : (
            <Link to="/login">Login</Link>
          )}
            </motion.button>
          </div>
        </div>
      </div>

      <UpcomingPage />
      <GenrePage />
    </div>
  );
};

export default HomePage;
