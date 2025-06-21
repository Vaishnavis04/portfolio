import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import apple from "../../images/apples.jpg";
import todo from "../../images/todo.jpg";
import water from "../../images/water.png";
import recipe from "../../images/recipe.jpg";
import Book from "../../images/Book.jpg";
import Hr from "../../images/Hr.jpg";
const ProjectMob = () => {
 const services = [
    {
      id: 1,
      title: "Heavenly Apples",
      description: "A simple website using HTML, CSS & JS to showcase apple-related info beautifully.",
      image: apple,
      background: "#F5F5F5",
      liveDemo: "#", // Replace
      gitHub: "#",    // Replace
    },
    {
      id: 2,
      title: "Todo List",
      description: "An intuitive to-do list app for managing tasks efficiently.",
      image: todo,
      background: "#FAFAFA",
      liveDemo: "#",
      gitHub: "#",
    },
    {
      id: 3,
      title: "Waste Sorting Machine",
      description: "Automated system for classifying waste into metal, wet, and dry types.",
      image: water,
      background: "#EFEFEF",
      liveDemo: "#",
      gitHub: "#",
    },
    {
      id: 4,
      title: "Recipe Website",
      description: "A user-friendly platform for discovering and saving your favorite recipes.",
      image: recipe,
      background: "#FFFFFF",
      liveDemo: "#",
      gitHub: "#",
    },
    {
      id: 5,
      title: "Book Store",
      description: "An e-commerce site for browsing and purchasing books seamlessly.",
      image: Book,
      background: "#F4F4F4",
      liveDemo: "#",
      gitHub: "#",
    },
    {
      id: 6,
      title: "HR Management System",
      description: "Streamline HR tasks with real-time status updates and task tracking.",
      image: Hr,
      background: "#FCFCFC",
      liveDemo: "#",
      gitHub: "#",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>PROJECT</h1>
      <p style={styles.description}>
        As a full-stack developer, I build intuitive and scalable applications tailored to client needs.
      </p>
      <Slider {...sliderSettings} style={styles.slider}>
        {services.map((service) => (
          <div key={service.id} style={{ ...styles.card, background: service.background }}>
            <img src={service.image} alt={service.title} style={styles.image} />
            <div style={styles.textContainer}>
              <h3 style={styles.cardHeading}>{service.title}</h3>
              <p style={styles.cardDescription}>{service.description}</p>
            </div>
            <div style={styles.buttonContainer}>
              <button
                style={styles.button}
                onClick={() => window.open(service.gitHub, "_blank")}
              >
                GitHub
              </button>
              <button
                style={styles.button}
                onClick={() => window.open(service.liveDemo, "_blank")}
              >
                Live Demo
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "100%",
    margin: "0 auto",
    padding: "20px 10px",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
  },
  heading: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "12px",
    color: "#222",
  },
  description: {
    fontSize: "15px",
    color: "#555",
    marginBottom: "25px",
    padding: "0 10px",
    lineHeight: "1.5",
  },
  slider: {
    width: "100%",
    maxWidth: "330px",
    margin: "0 auto",
  },
  card: {
    borderRadius: "18px",
    padding: "15px",
    maxWidth: "300px",
    margin: "0 auto",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    color: "#333",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "12px",
  },
  textContainer: {
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "0 0 20px 0",
    width: "90%",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
  },
  cardHeading: {
    fontSize: "17px",
    fontWeight: "600",
    marginBottom: "6px",
  },
  cardDescription: {
    fontSize: "14px",
    color: "#444",
    lineHeight: "1.4",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "15px",
  },
  button: {
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: "6px",
    fontSize: "14px",
    cursor: "pointer",
  },
};

export default ProjectMob;
