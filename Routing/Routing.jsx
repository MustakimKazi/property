import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../src/Component/Navbar";
import Footer from "../src/Component/Footer";
import Home from "../src/Pages/Home";
import Buy from "../src/Pages/Buy";
import Signup from "../src/Pages/Signup";
import Login from "../src/Pages/Login";
import ProtectedRoute from "../ProtectedRoute";
import Rent from "../src/Pages/Rent";

function Routing() {
  const location = useLocation();
  const hideLayout = ["/login", "/signup"].includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/buy"
          element={
            <ProtectedRoute>
              <Buy />
            </ProtectedRoute>
          }
        />
        <Route
          path="/rent"
          element={
            <ProtectedRoute>
              <Rent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sell"
          element={
            <ProtectedRoute>
              <Rent />
            </ProtectedRoute>
          }
        />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default Routing;
