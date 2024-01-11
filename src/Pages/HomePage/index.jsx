import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./HomePage.css";
import { Upcoming } from "../../Components/Upcoming";
import backgroundVideo from "../../assets/bc.mp4";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <>
      <div className="homePage">
        <div className="background">
          {/* <video autoPlay loop muted>
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}

          <h1 className="neon-text">MOVIE TITLE</h1>
          <h5>something message for the client.... blur blur blur </h5>
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
    </>
  );
};

export default HomePage;
