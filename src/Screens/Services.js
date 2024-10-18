import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div name="Services" className={styles.services}>
      <p>We solve your company's problems by our excelent transport solutions.</p>
      <img
        className={styles.webImage}
        src={require("../assets/webimage.webp")}
      ></img>
    </div>
  );
};

export default Services;
