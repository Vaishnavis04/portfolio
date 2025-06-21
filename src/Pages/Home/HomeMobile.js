import React, { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../images/V-logo.png";
import resumePDF from "../../documents/Vaishnavi.pdf";
import chan from "../../images/profile.jpg";
import Project from "../Project/ProjectDesktop";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Icons from "../Icons";
import Footer from "../Footer/Footer";
import Experience from "../Experience/ExperienceDesktop";

const HeroMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);

  const handleScroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Vaishnavi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#FFFFFF" }}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          padding: "30px 15px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          color: "#333333",
        }}
      >
        {/* Logo and Navbar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
            <h1
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                margin: 0,
                color: "#333333",
              }}
            >
              Vaishnavi
            </h1>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#333333",
              fontSize: "24px",
            }}
            aria-label="Toggle menu"
          >
            {!menuOpen && <FaBars />}
          </button>
        </div>

        {/* Sidebar Menu */}
        <div
          style={{
            position: "fixed",
            top: "0",
            right: menuOpen ? "0" : "-250px",
            width: "250px",
            height: "100vh",
            backgroundColor: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px 0",
            gap: "15px",
            transition: "right 0.3s ease-in-out",
            zIndex: "1000",
            color: "#333333",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              background: "transparent",
              border: "none",
              color: "#333333",
              fontSize: "20px",
              cursor: "pointer",
              alignSelf: "flex-end",
              marginRight: "15px",
            }}
            aria-label="Close menu"
          >
            ✖
          </button>

          {[
            { name: "Home", ref: homeRef },
            { name: "Experience", ref: experienceRef },
            { name: "Project", ref: projectRef },
            { name: "Skills", ref: skillsRef },
            { name: "Contact", ref: contactRef },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.ref)}
              style={{
                background: "none",
                border: "none",
                color: "#333333",
                fontSize: "16px",
                cursor: "pointer",
                padding: "10px 20px",
              }}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Profile Image */}
        <div style={{ marginTop: "20px" }}>
          <img
            src={chan}
            alt="Profile"
            style={{
              width: "250px",
              height: "350px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Main Content */}
        <div style={{ maxWidth: "90%" }}>
          <h4
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "#6366F1",
            }}
          >
            WELCOME
          </h4>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: "bold",
              color: "#333333",
              marginTop: "10px",
            }}
          >
            Build Your Digital Presence with Cutting-Edge Website Development
          </h2>
          <p style={{ marginTop: "15px", fontSize: "14px", color: "#333333" }}>
            I am Vaishnavi, a passionate{" "}
            <b style={{ color: "#6366F1" }}>Full-Stack Developer</b> dedicated
            to building scalable and high-performing web solutions. With
            expertise in{" "}
            <b style={{ color: "#6366F1" }}>
              JavaScript, React, Node.js, and Express.js
            </b>
            , I specialize in crafting dynamic applications through clean and
            efficient code. I’m always eager to learn, grow, and bring
            innovative ideas to life through technology. Let's build something
            amazing together!
          </p>
          <button
            onClick={handleResumeDownload}
            style={{
              marginTop: "20px",
              padding: "12px 30px",
              background: "#6366F1",
              border: "none",
              borderRadius: "30px",
              fontSize: "1rem",
              fontWeight: "bold",
              color: "#fff",
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.background = "#4F46E5";
              e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.background = "#6366F1";
              e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            }}
          >
            Resume Download
          </button>
        </div>
      </div>

      {/* Section Anchors */}
      <div ref={homeRef}></div>
      <Icons />
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={projectRef}>
        <Project />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default HeroMobile;

