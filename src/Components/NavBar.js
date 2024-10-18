import React, { useState } from 'react';
import styles from './NavBar.module.css';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const toggleNavBar = () => {
    setNavBarOpen(!navBarOpen);
  };

  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "Services" },
    { id: 3, link: "HowWeWork" },
    { id: 4, link: "Benefits" },
    { id: 5, link: "Contact" }
  ];

  return (
    <div className={navBarOpen ? styles.navOpen : styles.navBar}>
      <div className={styles.logo}>
        <img src="/Logo_transport_completo.png" alt="Transport GO Logo" className={styles.logoImage} />
        <span>TRANSPORT GO | Cargo Solutions</span>
      </div>

      <div onClick={toggleNavBar} className={styles.menuIcon}>
        {navBarOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {navBarOpen && (
        <ul className={styles.navList}>
          {links.map(x => (
            <li key={x.id} className={styles.navLink}>
              <a href={`#${x.link}`} onClick={toggleNavBar}>
                {x.link === "HowWeWork" ? "How we work" : x.link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
