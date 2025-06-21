import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import HeroMobile from "./HomeMobile";
import logo from "../../images/V-logo.png";
import resumePDF from "../../documents/Vaishnavi.pdf";
import chan from "../../images/profile.jpg";
import Project from "../Project/ProjectDesktop";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Icons from "../Icons";
import Footer from "../Footer/Footer";
import Experience from "../Experience/ExperienceDesktop";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
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

  if (isMobile) {
    return <HeroMobile />;
  }

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#FFFFFF" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          backgroundColor: "#FFFFFF",
          padding: "50px 20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Logo, Title, and Navbar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px",
            paddingLeft: "50px",
            paddingRight: "50px",
          }}
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ width: "70px", height: "70px", borderRadius: "50%" }}
            />
            <h1
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                color: "#333333",
                margin: 0,
              }}
            >
              Vaishnavi
            </h1>
          </motion.div>

          {/* Navbar */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{
              display: "flex",
              gap: "20px",
              whiteSpace: "nowrap",
            }}
          >
            {[{ name: "Home", ref: homeRef }, { name: "Experience", ref: experienceRef }, { name: "Project", ref: projectRef }, { name: "Skills", ref: skillsRef }, { name: "Contact", ref: contactRef }].map((item, index) => (
              <motion.a
                key={index}
                onClick={() => handleScroll(item.ref)}
                style={{
                  textDecoration: "none",
                  color: "#333333",
                  fontSize: "18px",
                  cursor: "pointer",
                  paddingLeft: "60px",
                  position: "relative",
                }}
                whileHover={{
                  scale: 1.1,
                  color: "#6366F1",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Main Content */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: "1200px",
            paddingLeft: "145px",
            gap: "100px",

          }}
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ maxWidth: "600px", textAlign: "left" }}
          >
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                color: "#333333",
              }}
            >
              Showcasing My Expertise in Full-Stack Development
            </h2>
            <p
              style={{
                marginTop: "15px",
                fontSize: "16px",
                color: "#555555",
              }}
            >
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <motion.button
                onClick={handleResumeDownload}
                style={{
                  padding: "12px 24px",
                  background: "#6366F1",
                  border: "none",
                  borderRadius: "30px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  cursor: "pointer",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#4F46E5",
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                Download Resume
              </motion.button>
            </div>
          </motion.div>

          {/* Image with Animation */}
 <motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 1, delay: 0.6 }}
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    background: "#FFFFFF",
    borderRadius: "50%",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
    width: "fit-content",
    overflow: "hidden",
    marginLeft: "80px", // 🔼 Increased spacing from paragraph
    marginRight: "100px",
  }}
>
  <motion.img
    src={chan}
    alt="Profile"
    style={{
      width: "350px",
      height: "550px",
      borderRadius: "50%",
      objectFit: "cover",
      transition: "transform 0.3s ease-in-out",
    }}
    whileHover={{ scale: 1.05 }}
  />
</motion.div>


        </div>
      </motion.div>

      {/* Other Sections */}
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

export default Hero;
