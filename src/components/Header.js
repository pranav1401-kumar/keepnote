import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1><i className="fas fa-sticky-note icon"></i> Note Keeper</h1>
    </header>
  );
}

export default Header;
