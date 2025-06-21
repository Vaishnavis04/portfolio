import React from "react";

const experiences = [
  {
    title: "MERN Stack - Better Tomorrow",
    year: "2024",
    description:
      "During the internship at Better Tomorrow, proficiency in MERN Stack Development was demonstrated, showcasing expertise in HTML, CSS, JavaScript, MySQL, MongoDB, React JS, and Node JS through successful project completion.",
    image: "https://cdn-icons-png.flaticon.com/512/919/919825.png", // Replace with your image URL
  },
  {
    title:"Web Developer - Octanet",
    year: "2024",
    description:
    "As a Web Developer at Octanet, I honed my skills in HTML, CSS, JavaScript, and React JS, contributing to the development of dynamic and responsive web applications. This role enhanced my understanding of front-end technologies and user experience design.",
    image:"https://static.ambitionbox.com/assets/v2/images/rs:fit:1280:960:false:false/bG9jYWw6Ly8vbG9nb3Mvb3JpZ2luYWxzL29jdGFuZXQuanBn.png"
  }
];

const Experience = () => {
  const styles = {
    section: {
      textAlign: "center",
      padding: "40px 20px",
      fontFamily: "'Arial', sans-serif",
    },
    heading: {
      fontSize: "30px",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "20px",
      textTransform: "uppercase",
      display: "inline-block",
      paddingBottom: "5px",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "30px",
    },
    card: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      maxWidth: "800px",
      width: "100%",
      borderBottom: "2px solid #ccc",
      padding: "20px 0",
    },
    image: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
    },
    content: {
      textAlign: "left",
    },
    title: {
      fontSize: "22px",
      fontWeight: "bold",
      color: "#222",
    },
    year: {
      fontSize: "18px",
      fontWeight: "500",
      color: "#666",
      marginBottom: "5px",
    },
    description: {
      fontSize: "16px",
      color: "#444",
      lineHeight: "1.5",
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Internship</h2>
      <div style={styles.container}>
        {experiences.map((exp, index) => (
          <div key={index} style={styles.card}>
            <img src={exp.image} alt={exp.title} style={styles.image} />
            <div style={styles.content}>
              <h3 style={styles.title}>{exp.title}</h3>
              <p style={styles.year}>{exp.year}</p>
              <p style={styles.description}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
