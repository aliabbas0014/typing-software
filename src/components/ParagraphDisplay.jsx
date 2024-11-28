import React from "react";
import { BiError } from "react-icons/bi"; // Import the warning icon
import { Link } from "react-router-dom"; // Import Link component

const ParagraphDisplay = ({ paragraph, charIndex, mistakes }) => {
  const isSmallScreen = window.innerWidth < 576; // Check for small screens

  

if (isSmallScreen) {
  // Render popup for small screens
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999, // Ensure it stays on top
      }}
    >
      <BiError size={60} color="red" style={{ marginBottom: "20px" }} /> {/* Warning Icon */}
      <h1 style={{ fontSize: "2rem", textAlign: "center" }}>Typing Practice</h1>
      <p style={{ fontSize: "1.2rem", lineHeight: "1.5", textAlign: "center", margin: "20px 0", padding: '10px' }}>
        This website is optimized for desktop or laptop use. Please visit on a larger screen for the best experience.
      </p>
      <Link
        to="/" // Use Link for client-side navigation
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "#007bff",
          color: "white",
          textDecoration: "none", // Remove underline from the link
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Go to Home
      </Link>
    </div>
  );
}


  // Render typing functionality for larger screens
  return (
    <p
      className="mt-1"
      style={{
        fontSize: window.innerWidth < 576 ? "1.2rem" : "1.9rem",
        lineHeight: window.innerWidth < 576 ? "2rem" : "3rem",
        letterSpacing: window.innerWidth < 576 ? "2px" : "4px",
        wordSpacing: window.innerWidth < 576 ? "4px" : "7px",
        fontWeight: "500",
      }}
    >
      {paragraph.split("").map((char, index) => {
        let className = "";
        if (index < charIndex && mistakes.includes(index)) {
          className = "text-danger";
        } else if (index < charIndex) {
          className = "text-success";
        }
        if (index === charIndex) {
          className = "text-primary text-underline";
        }

        return (
          <span key={index} className={className}>
            {char}
          </span>
        );
      })}
    </p>
  );
};

export default ParagraphDisplay;
