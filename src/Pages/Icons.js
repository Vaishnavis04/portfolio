import React, { useEffect, useState } from "react";
import Instagram from "../images/instagram.png";
import Github from "../images/github.png";
import LinkedIn from "../images/linked.png";
import Gmail from "../images/gmail.jpg";
import Phone from "../images/phone.png";

const Icons = () => {
  const iconSize = 60;
  const iconMargin = 20;

  const iconData = [
    { url: "https://www.instagram.com/yourusername", img: Instagram },
    { url: "https://github.com/Vaishnavis04", img: Github },
    { url: "https://www.linkedin.com/in/vaishnavi-s-a4016a256", img: LinkedIn },
    { url: "mailto:vaishnavi.s2022eee@sece.ac.in", img: Gmail },
    { url: "tel:+1234567890", img: Phone }, // Click to call
  ];

  const [iconsToShow, setIconsToShow] = useState(15);

  useEffect(() => {
    const updateCount = () => {
      const screenWidth = window.innerWidth;
      const total = Math.ceil(screenWidth / (iconSize + iconMargin)) * 2;
      setIconsToShow(total);
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const extendedIcons = Array(iconsToShow)
    .fill(iconData)
    .flat()
    .slice(0, iconsToShow);

  const styles = {
    wrapper: {
      overflow: "hidden",
      backgroundColor: "#fff",
      padding: "15px 0",
    },
    scroller: {
      display: "flex",
      gap: `${iconMargin}px`,
      animation: "scroll 15s linear infinite",
    },
    icon: {
      width: `${iconSize}px`,
      height: `${iconSize}px`,
      borderRadius: "12px",
      objectFit: "cover",
      transition: "transform 0.3s",
    },
    "@keyframes": `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `,
  };

  return (
    <div style={styles.wrapper}>
      <style>{styles["@keyframes"]}</style>
      <div style={styles.scroller}>
        {extendedIcons.map((icon, idx) => (
          <a
            key={idx}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block" }}
          >
            <img
              src={icon.img}
              alt={`icon-${idx}`}
              style={{
                ...styles.icon,
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Icons;
