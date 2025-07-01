import React from "react";
import styles from "./Component3.module.css";

function Component3() {
  return (
    <section className={styles.sectionBg}>
      <div className={styles.visionHeader}>
        <h2 className={styles.visionTitle}>Record</h2>
        <blockquote className={styles.visionSlogan}>
          "다양한 로봇 및 딥테크 분야에서 개발자, 기획자, PM, 기술총괄 등으로 활동하며 정부·공공기관 과제와 창업 경진대회 수상, 자율주행 및 우주 기술 사업화를 이끈 경력을 보유한 로보틱스 및 딥테크 전문가입니다.<br/>
          A robotics and deep-tech expert with extensive experience as a developer, planner, project manager, and technical lead, driving government and public sector projects, winning startup competitions, and leading commercialization efforts in autonomous systems and space technologies."
        </blockquote>
      </div>
      <div className={styles.timelineWrapper}>
        <div className={styles.timeline}>
          <div className={styles.yearBlock}>
            <div className={styles.year}>2025</div>
            <div className={styles.yearContent}>한국전력기술(주) 공간정보 자동 맵핑 및 시나리오 기반 로봇 운영 기술자문(완료, 자문등급C)</div>
          </div>
          <div className={styles.line} />
          <div className={styles.yearBlock}>
            <div className={styles.year}>2024. 12</div>
            <div className={styles.yearContent}>한국전력기술(주) ROS기반 SLAM 및 3D데이터 처리 기술 자문(완료, 자문등급 C)</div>
          </div>
          <div className={styles.line} />
          <div className={styles.yearBlock}>
            <div className={styles.year}>2024. 10</div>
            <div className={styles.yearContent}>주식회사 유엔아이비 설립</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Component3;
