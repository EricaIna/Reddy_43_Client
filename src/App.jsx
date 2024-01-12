import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { DropdownMenu } from "./Components/DropdownMenu";
import * as Pages from "./Pages";
import { AnimatePresence } from "framer-motion";
import ProtectedRoute from "./ProtectedRoute";
import { ScrollableSection } from "./Components";


// function App() {
//   return (
//     <>
//       <AnimatePresence>
//         <DropdownMenu />
//         <Routes>
//           <Route path="/" element={<ProtectedRoute><Pages.HomePage /></ProtectedRoute>}></Route>
//           <Route path="/login" element={<Pages.LoginPage />} />
//           <Route path="/register" element={<Pages.RegisterPage />} />
//           <Route path="/list" element={<ProtectedRoute><Pages.ListPage /></ProtectedRoute>} />
//         </Routes>
//       </AnimatePresence>
//     </>
//   );
// }

function App() {
  return (
    <>
      <AnimatePresence>
        <DropdownMenu />
        <Routes>
          <Route path="/" element={<Pages.HomePage />}></Route>
          <Route path="/login" element={<Pages.LoginPage />} />
          <Route path="/register" element={<Pages.RegisterPage />} />
          <Route
            path="/list"
            element={
              // <ProtectedRoute>
              <Pages.ListPage />
              // </ProtectedRoute>
            }
          />
          <Route path="/list" element={<Pages.ListPage />} />
          <Route path="/genre" element={<Pages.GenrePage />} />
          <Route path="/top" element={<Pages.TopPage />} />
          <Route path="/upcoming" element={<Pages.UpcomingPage />} />
          <Route path="/scroll" element={<ScrollableSection/>}/>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
