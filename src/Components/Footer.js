import React from 'react';
import styles from './Footer.module.css'; // Asegúrate de crear este archivo CSS

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.flags}>
        <span>🇨🇴 Bogotá, Colombia: Carrera 90A #64C-54</span>
        <span>🇨🇱 Santiago, Chile: Av. Andrés Bello 2711</span>
        <span>🇲🇽 Mexico City, Mexico: Av. Paseo de la Reforma 505</span>
        <span>🇺🇸 Miami, USA: 1500 NW 167th St</span>
        <span>🇦🇷 Buenos Aires, Argentina: 710 Bouchard, Piso 12</span>
      </div>
      <p>Terms and Conditions | PQRS | Privacy Policy | Linkage</p>
      <p>Email: <a href="mailto:info@transportgo.lat">info@transportgo.lat</a></p>
      <p>&copy; Transport © 2024</p>
    </footer>
  );
};

export default Footer;