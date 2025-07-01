import React from 'react';
import styles from './MainContent.module.css';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
import Component5 from './Component5';
const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <div id="MAIN" className={styles.component}><Component1 /></div>
      <div id="VISION" className={styles.component}><Component2 /></div>
      <div id="Record" className={styles.component}><Component3 /></div>
      <div id="REFERENCE" className={styles.component}><Component4 /></div>
      <div id="CONTACTS" className={styles.component}><Component5 /></div>
    </div>
  );
};

export default MainContent;
