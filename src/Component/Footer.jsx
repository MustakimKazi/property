import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#3f51b5",
        color: "#fff",
        textAlign: "center",
        padding: "60px 20px 30px", // ✅ balanced padding
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Title */}
      <h2 style={{ fontSize: "30px", fontWeight: "bold", marginBottom: "15px" }}>
        Get in Touch with Us
      </h2>

      {/* Subtitle */}
      <p style={{ fontSize: "18px", marginBottom: "30px", maxWidth: "600px" }}>
        Subscribe now for exclusive property insights and deals!
      </p>

      {/* Subscription Form */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f1f1f1",
          borderRadius: "25px",
          overflow: "hidden",
          width: "360px",
          marginBottom: "50px",
        }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            padding: "14px 18px",
            fontSize: "15px",
          }}
        />
        <button
          style={{
            backgroundColor: "#1f3bb3",
            color: "#fff",
            border: "none",
            padding: "14px 22px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          Submit
        </button>
      </div>

      {/* Footer Bottom */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.3)",
          paddingTop: "25px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          maxWidth: "1100px", // keeps it aligned in large screens
        }}
      >
        {/* Left Logo */}
        <div style={{ display: "flex", alignItems: "center", fontWeight: "bold", marginBottom: "10px" }}>
          <span style={{ fontSize: "22px", marginRight: 6 }}>🏠</span>
          <span>PropBot</span>
        </div>

        {/* Center Links */}
        <div style={{ display: "flex", gap: "25px", fontSize: "15px", marginBottom: "10px" }}>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>For Sale</a>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Rentals</a>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>New Projects</a>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Property News</a>
        </div>

        {/* Right Text */}
        <div style={{ fontSize: "14px" }}>
          ©2025 PropBot. All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
