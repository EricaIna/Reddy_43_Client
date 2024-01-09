import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>MOVIE TITLE</h1>
      <em>join us now</em>
      <ul>
        <li>{/* <Link to="/shows">Explore Shows</Link> */}</li>
        <li>{/* <Link to="/search">Search shows...</Link> */}</li>
      </ul>
    </>
  );
};

export default HomePage;
