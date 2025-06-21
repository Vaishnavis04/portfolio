import React from "react";

const MobileContactMePage = ({ formData, handleChange, handleSubmit, status }) => {
  return (
    <div style={mobileStyles.container}>
      <h2 style={mobileStyles.header}>Contact Me</h2>
      <p style={mobileStyles.subtext}>
        Let's connect! Have a project, idea, or just want to chat? Drop me a message!
      </p>
      <p style={mobileStyles.paragraph}>
        Have a question or just want to chat? Drop me a message, and I'll get back to you as soon as possible!
      </p>
      <form style={mobileStyles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          style={mobileStyles.input}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          style={mobileStyles.input}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number (Optional)"
          style={mobileStyles.input}
          value={formData.phone}
          onChange={handleChange}
        />
        <select
          name="country"
          style={mobileStyles.input}
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Select Your Country</option>
          <option value="US">United States</option>
          <option value="UK">United Kingdom</option>
          <option value="India">India</option>
        </select>
        <textarea
          name="message"
          placeholder="Your Message"
          style={mobileStyles.textarea}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" style={mobileStyles.button}>Send</button>
        {status && <p style={mobileStyles.status}>{status}</p>}
      </form>
    </div>
  );
};

const mobileStyles = {
  container: {
    padding: "25px",
    textAlign: "center",
    background: "#ffffff",
    color: "#333333",
    minHeight: "100vh",
  },
  header: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#2c3e50", // heading dark blue-gray
  },
  subtext: {
    fontSize: "15px",
    marginBottom: "8px",
    color: "#555",
  },
  paragraph: {
    fontSize: "16px",
    marginBottom: "20px",
    color: "#444",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    maxWidth: "400px",
    margin: "0 auto",
  },
  input: {
    padding: "12px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    backgroundColor: "#fff",
    color: "#333",
    outline: "none",
  },
  textarea: {
    padding: "12px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    backgroundColor: "#fff",
    color: "#333",
    height: "100px",
    resize: "vertical",
  },
  button: {
    padding: "12px",
    backgroundColor: "#2c3e50",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background 0.3s ease",
  },
  status: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#28a745",
  },
};

export default MobileContactMePage;
