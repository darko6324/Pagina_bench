import React from "react";
import { Link } from "react-scroll";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div name="Home" className={styles.home}>
      <div className={styles.titleContainer}>
        <img 
          src="/Logo_transport_completo_700.png" 
          alt="Transport Logo" 
          className={styles.logo} 
          style={{ display: 'block', margin: '0 auto', width: '150px' }} // Ajusta el tamaño según sea necesario
        />
        <p>
          Expand your <br />
          <b>business</b>
        </p>
        <p>
          With the best <br />
          <b>Operational Team</b>
        </p>
        <p>
          Featuring a fleet of electric vehicles for sustainable logistics solutions.
        </p>
      </div>
      <div className={styles.ctaContainer}>
        <Link
          to="Contact"
          smooth
          duration={500}
          className={styles.callToAction}
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
};

export default Home;
