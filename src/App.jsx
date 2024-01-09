import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { DropdownMenu } from "./Components/DropdownMenu";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DropdownMenu />}>
          {/* <Route path="/" element={<Pages.HomePage />}></Route>
          <Route path="/shows">
            <Route index element={<Pages.ShowsPage />}></Route>
            <Route path="/shows/:id" element={<Pages.ShowPage />}></Route>
          </Route>
          <Route path="/search" element={<Pages.SearchPage />}></Route>
          <Route path="*" element={<Pages.NotFoundPage />}></Route> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
