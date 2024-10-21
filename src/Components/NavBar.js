import React, { useState } from 'react';
import styles from './NavBar.module.css';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const toggleNavBar = () => {
    setNavBarOpen(!navBarOpen);
  };

  // Nueva función para manejar el click en los enlaces y asegurarse de que el anclaje ocurra antes
  const handleLinkClick = (path) => {
    window.location.href = path;  // Esto asegura que se haga el scroll al ID correcto
    setTimeout(() => {
      setNavBarOpen(false); // Espera un momento antes de cerrar el menú
    }, 300);  // Ajusta el tiempo para asegurarte de que el desplazamiento ocurra antes de cerrar el menú
  };

  const links = [
    { id: 1, link: "Home", path: "#home" },
    { id: 2, link: "Services", path: "#services" },
    { id: 3, link: "HowWeWork", path: "#howwework" },
    { id: 4, link: "Benefits", path: "#benefits" },
    { id: 5, link: "Contact", path: "#contact" }
  ];

  return (
    <div className={navBarOpen ? styles.navOpen : styles.navBar}>
      <div className={styles.logo}>
        <img src="/Logo_transport_completo.png" alt="Transport GO Logo" className={styles.logoImage} />
        <span>TRANSPORT GO | Cargo Solutions</span>
      </div>

      <div onClick={toggleNavBar} className={`${styles.menuIcon} ${styles.hideOnDesktop}`}>
        {navBarOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      <ul className={`${styles.navList} ${navBarOpen ? styles.showOnMobile : ''}`}>
        {links.map(x => (
          <li key={x.id} className={styles.navLink}>
            <a 
              href={x.path} 
              onClick={() => handleLinkClick(x.path)}  
              className={x.link === "Contact" ? styles.contactLink : ''}  // Aplica el estilo solo a "Contact"
            >
              {x.link === "HowWeWork" ? "How we work" : x.link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
