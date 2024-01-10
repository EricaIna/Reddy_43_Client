import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Movies } from "../../Components/Movies";
import "./HomePage.css";
import { Upcoming } from "../../Components/Upcoming";

const HomePage = () => {
  return (
    <>
      <div className="homePage">
        <div className="background">
          <h1 className="neon-text">MOVIE TITLE</h1>
          <em>join us now</em>
        </div>
      </div>
      <Upcoming />
    </>
  );
};

export default HomePage;
