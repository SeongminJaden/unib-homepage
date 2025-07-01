import React from "react";
import styles from "./Component1.module.css";
import heroImg from "../assets/hero-building.png"; // 이미지 파일은 실제로 추가 필요

function Component1() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.leftArea}>
        <div className={styles.textGroup}>
          <p className={styles.subTitle}>Connecting technologies,<br/>expanding possibilities</p>
          <h1 className={styles.title}>Seongmin's<br/>portfolio</h1>
        </div>
        <div className={styles.slideNav}>
          <button className={styles.slideBtn} aria-label="이전 슬라이드">
            &#8592;
          </button>
          <span className={styles.pageIndicator}><span className={styles.pageNum}>01</span> / <span className={styles.pageTotal}>02</span></span>
          <button className={styles.slideBtn} aria-label="다음 슬라이드">
            &#8594;
          </button>
        </div>
      </div>
      <div className={styles.rightArea}>
        <img src={heroImg} alt="건축물 이미지" className={styles.heroImg} />
        <button className={styles.viewMoreBtn}>
          view more <span className={styles.arrow}>&rarr;</span>
        </button>
      </div>
    </section>
  );
}

export default Component1;
