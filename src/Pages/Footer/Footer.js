import React from "react";
import logo from "../../images/V-logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  const styles = {
    footerTop: {
      background: "#ffffff",
      padding: "20px 10px",
      textAlign: "center",
      color: "#333333",
      fontFamily: "'Times New Roman', serif",
    },
    footerQuote: {
      fontSize: "18px",
      fontWeight: "bold",
      margin: 0,
    },
    footerBottom: {
      background: "linear-gradient(to right, #e0e0e0, #f5f5f5)",
      padding: "30px 20px 15px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "#333333",
      fontFamily: "'Times New Roman', serif",
      flexWrap: "wrap",
    },
    socialIcons: {
      display: "flex",
      gap: "15px",
      flexWrap: "wrap",
    },
    icon: {
      color: "#333333",
      fontSize: "24px",
      textDecoration: "none",
      transition: "color 0.3s ease",
    },
    iconHover: {
      color: "#0077b5", // LinkedIn blue, for hover effect
    },
    footerRights: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontSize: "14px",
      flexWrap: "wrap",
      marginTop: "10px",
    },
    logo: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      objectFit: "cover",
    },
    connect: {
      fontSize: "14px",
      textAlign: "center",
      marginTop: "10px",
      fontStyle: "italic",
      color: "#444",
    },
  };

  return (
    <>
      {/* Top Quote */}
      <div style={styles.footerTop}>
        <p style={styles.footerQuote}>
          “Turning ideas into reality – One line of code at a time.”
        </p>
      </div>

      {/* Bottom Footer */}
      <footer style={styles.footerBottom}>
        {/* Left Side: Social Icons */}
        <div>
          <div style={styles.socialIcons}>
            <a
              href="https://www.linkedin.com/in/your-linkedin" // Replace with your URL
              style={styles.icon}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/your-github" // Replace with your URL
              style={styles.icon}
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://twitter.com/your-twitter" // Replace with your URL
              style={styles.icon}
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="mailto:youremail@example.com" // Replace with your email
              style={styles.icon}
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://your-portfolio.com" // Replace with your portfolio URL
              style={styles.icon}
              aria-label="Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-globe"></i>
            </a>
          </div>
          <p style={styles.connect}>
            Let’s connect and build something amazing together!
          </p>
        </div>

        {/* Right Side: Rights and Logo */}
        <div style={styles.footerRights}>
          <span>© 2025 All rights reserved</span>
          <img src={logo} alt="Portfolio Logo" style={styles.logo} />
        </div>
      </footer>
    </>
  );
};

export default Footer;
