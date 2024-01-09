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
        <Route path="/login" element={<Pages.LoginPage/>}/>
        <Route path="/register" element={<Pages.RegisterPage/>}/>
      </Routes>
    </>
  );
}

export default App;
