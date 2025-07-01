import React from "react";
import styles from "./Footer.module.css"; // CSS 모듈을 import

function Footer() {
  return (
    <footer className={styles.footer}> {/* CSS 모듈을 사용 */}
      <div className={styles.footerLeft}> {/* CSS 모듈 클래스 적용 */}
        <p><strong>UNIB HQ</strong></p>
        <p>경기도 하남시 미사대로 520 현대지식산업센터 2차 D동 707호</p>
        <p>(+82) 031-1234-5678</p>
        <p><strong>UNIB R&D Center</strong></p>
        <p>경기도 하남시 미사대로 520 현대지식산업센터 2차 D동 707호</p>
      </div>
    </footer>
  );
}

export default Footer;
