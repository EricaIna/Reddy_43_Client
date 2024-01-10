import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Movies } from "../../Components/Movies";
import "./HomePage.css";
import { Upcoming } from "../../Components/Upcoming";
import backgroundVideo from "../../assets/bc.mp4";

const HomePage = () => {
  return (
    <>
      <div className="homePage">
        <div className="background">
          <video autoPlay loop muted>
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1 className="neon-text">MOVIE TITLE</h1>
          <em>join us now</em>
        </div>
      </div>
      <Upcoming />
    </>
  );
};

export default HomePage;
