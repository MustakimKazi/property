import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear login token (if any)
    localStorage.removeItem("token");
    // Redirect to login page
    navigate("/login");
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 40px",
        backgroundColor: "#fff",
        borderBottom: "1px solid #eee",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", fontWeight: "bold", fontSize: 20 }}>
        <span style={{ fontSize: 22, marginRight: 6 }}>🏠</span>
        <span style={{ color: "#111" }}>PropBot</span>
      </div>

      {/* Navigation Links */}
      <nav style={{ display: "flex", gap: 20 }}>
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/buy">Buy</Link>
        <Link style={linkStyle} to="/rent">Rent</Link>
        <Link style={linkStyle} to="/sell">Sell</Link>
        <Link style={linkStyle} to="/about">About Us</Link>
        <Link style={linkStyle} to="/contact">Contact Us</Link>
      </nav>

      {/* Logout Button */}
      <div>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "#ff4d4f",
            color: "#fff",
            padding: "10px 18px",
            borderRadius: 25,
            border: "none",
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
            transition: "background 0.3s",
          }}
        >
          Logout
        </button>
      </div>
    </header>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#111",
  fontSize: 15,
  transition: "color 0.3s",
};

export default Navbar;
