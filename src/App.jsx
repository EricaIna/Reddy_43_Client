import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { DropdownMenu } from "./Components/DropdownMenu";
import * as Pages from "./Pages";

function App() {
  return (
    <>
      <DropdownMenu />
      <Routes>
        <Route path="/" element={<Pages.HomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
