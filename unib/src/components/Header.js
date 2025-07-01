import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  const scrollToComponent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 102; // 헤더 높이(px)
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementTop - headerHeight,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <button onClick={() => scrollToComponent("MAIN")}>MAIN</button>
          </li>
          <li className={styles.navItem}>
            <button onClick={() => scrollToComponent("VISION")}>VISION</button>
          </li>
          <li className={styles.navItem}>
            <button onClick={() => scrollToComponent("Record")}>RECORD</button>
          </li>
          <li className={styles.navItem}>
            <button onClick={() => scrollToComponent("REFERENCE")}>REFERENCE</button>
          </li>
          <li className={styles.navItem}>
            <button onClick={() => scrollToComponent("CONTACTS")}>CONTACTS</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
