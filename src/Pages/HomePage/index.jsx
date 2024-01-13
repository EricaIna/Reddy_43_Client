import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./HomePage.css";
import { Upcoming } from "../../Components/Upcoming";

import { motion } from "framer-motion";
import GenrePage from "../GenrePage";

const HomePage = () => {
  return (
    <>
      <div className="homePage">
        <div className="background">
          <h1 className="neon-text">
            THE MOVIES<br></br>that makes us
          </h1>
          <h5>A web site for everyone, with something for anyone</h5>
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
              <Link to="/login">Sign in</Link>
            </motion.button>
          </div>
        </div>
      </div>

      <Upcoming />
      <GenrePage />
    </>
  );
};

export default HomePage;
