import React, { useState } from "react";

function SearchSection() {
  const [searchLocation, setSearchLocation] = useState("");
  const [transactionType, setTransactionType] = useState("For Rent");
  const [propertyType, setPropertyType] = useState("House");
  const [location, setLocation] = useState("Indonesia");

  return (
    <>
      <section style={styles.wrapper}>
        <div style={styles.bgImage}></div>

        <div style={styles.content}>
          <h1 style={styles.title}>Find Your Dream Home in One Click!</h1>
          <p style={styles.subtitle}>
            Discover, Buy, or Rent Verified Properties with Ease.
          </p>

          {/* 🔍 Top Search */}
          <div style={styles.topSearch}>
            <div style={styles.searchInputWrapper}>
              <span style={styles.icon}>🔍</span>
              <input
                type="text"
                placeholder="Search Location..."
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                style={styles.searchInput}
              />
              <span style={styles.dropDownIcon}>▾</span>
            </div>
            <button style={styles.listPropertyBtn}>List Your Property</button>
          </div>

          {/* 📌 Bottom Search */}
          <div style={styles.bottomSearch}>
            <select
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
              style={styles.select}
            >
              <option>For Rent</option>
              <option>For Sale</option>
            </select>

            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              style={styles.select}
            >
              <option>House</option>
              <option>Apartment</option>
              <option>Villa</option>
            </select>

            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              style={styles.select}
            >
              <option>Indonesia</option>
              <option>USA</option>
              <option>Canada</option>
            </select>

            <button style={styles.findBtn}>Find Property</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchSection;

// 🎨 Inline Styles
const styles = {
  wrapper: {
    position: "relative",
    borderRadius: 30,

    margin: "20px auto",
    maxWidth: 1200,
    color: "white",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    height: "70vh",
  },
  bgImage: {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.5)",
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 50px",
    boxSizing: "border-box",
  },
  title: {
    fontSize: 30,
    fontWeight: 700,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 400,
    marginBottom: 30,
    border: "1px solid transparent",
    borderColor: "rgba(255, 255, 255, 0.7)",
    padding: "0 5px",
  },
  topSearch: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    width: "100%",
    maxWidth: 700,
    marginBottom: 40,
  },
  searchInputWrapper: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 15,
    padding: "10px 15px",
    color: "#999",
    fontSize: 14,
    position: "relative",
  },
  icon: {
    marginRight: 10,
    fontSize: 18,
  },
  searchInput: {
    border: "none",
    outline: "none",
    flex: 1,
    fontSize: 14,
    color: "#444",
  },
  dropDownIcon: {
    marginLeft: 10,
    cursor: "pointer",
    fontSize: 14,
    color: "#999",
  },
  listPropertyBtn: {
    backgroundColor: "transparent",
    border: "2px solid #243c7a",
    borderRadius: 30,
    color: "#243c7a",
    padding: "10px 20px",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: 14,
    whiteSpace: "nowrap",
  },
  bottomSearch: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    backgroundColor: "white",
    borderRadius: 40,
    padding: "20px 25px",
    boxShadow: "0 7px 20px rgb(0 0 0 / 0.1)",
    width: "100%",
    maxWidth: 900,
    position: "absolute",
    bottom: -35,
  },
  select: {
    borderRadius: 40,
    border: "1px solid #ccc",
    padding: "10px 15px",
    fontSize: 14,
    cursor: "pointer",
    flex: 1,
    color: "#444",
    appearance: "none",
    background: `url('data:image/svg+xml;utf8,<svg fill="gray" height="16" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>') no-repeat right 10px center`,
    backgroundColor: "white",
  },
  findBtn: {
    backgroundColor: "#243c7a",
    borderRadius: 30,
    color: "white",
    padding: "12px 30px",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: 14,
    flexShrink: 0,
  },
};
