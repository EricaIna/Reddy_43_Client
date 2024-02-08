import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { DropdownMenu } from "./Components/DropdownMenu";
import * as Pages from "./Pages";

import ProtectedRoute from "./ProtectedRoute";
import * as Components from "./Components";
import { Header } from "./Components/Header";

// function App() {
//   return (
//     <>
//
//         <DropdownMenu />
//         <Routes>
//           <Route path="/" element={<ProtectedRoute><Pages.HomePage /></ProtectedRoute>}></Route>
//           <Route path="/login" element={<Pages.LoginPage />} />
//           <Route path="/register" element={<Pages.RegisterPage />} />
//           <Route path="/list" element={<ProtectedRoute><Pages.ListPage /></ProtectedRoute>} />
//         </Routes>
//
//     </>
//   );
// }

function App() {
  return (
    <>
      {/* <DropdownMenu /> */}
      <Routes>
        <Route path="/" element={<Header />}>
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
          <Route
            path="/recommendation"
            element={<Pages.RecommendationsPage />}
          />
          <Route
            path="/recommendation/:id"
            element={<Pages.ListRecommendationsPage />}
          />
          <Route path="/genre" element={<Pages.GenrePage />} />
          <Route path="/top" element={<Pages.TopPage />} />
          {/* <Route path="/upcoming" element={<Pages.UpcomingPage />} /> */}
          <Route path="movies/recent" element={<Pages.UpcomingPage />} />
          <Route
            path="/search/:id"
            element={<Pages.AddToRecommendationsPage />}
          />
          <Route path="/scroll" element={<Components.ScrollableSection />} />
          <Route path="/review" element={<Components.LeaveReview />} />
          <Route path="/mylist" element={<Pages.UserListPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
