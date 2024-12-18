import React from 'react';
import styles from './MainContent.module.css';

const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <div id="MAIN" className={styles.component}>컴포넌트 1</div>
      <div id="VISION" className={styles.component}>컴포넌트 2</div>
      <div id="PRODUCTS" className={styles.component}>컴포넌트 3</div>
      <div id="REFERENCE" className={styles.component}>컴포넌트 4</div>
      <div id="CONTACTS" className={styles.component}>컴포넌트 5</div>
    </div>
  );
};

export default MainContent;
