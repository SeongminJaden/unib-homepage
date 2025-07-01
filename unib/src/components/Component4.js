import React from "react";
import styles from "./Component4.module.css";
import institution1 from "../assets/institution1.png";
import comp1 from "../assets/comp1.png";
import comp2 from "../assets/comp2.png";
import uni1 from "../assets/uni1.png";
import uni2 from "../assets/uni2.png";

function Component4() {
  return (
    <section className={styles.sectionBg}>
      <div className={styles.recordHeader}>
        <h2 className={styles.recordTitle}>Main Reference</h2>
        <blockquote className={styles.recordSlogan}>
          다양한 로봇 및 딥테크 분야에서 개발자, 기획자, PM, 기술총괄 등으로 활동하며 정부·공공기관 과제와 창업 경진대회 수상, 자율주행 및 우주 기술 사업화를 이끈 경력을 보유한 로보틱스 및 딥테크 전문가입니다.<br />
          <span className={styles.recordSloganEn}>
            A robotics and deep-tech expert with extensive experience as a developer, planner, project manager, and technical lead, driving government and public sector projects, winning startup competitions, and leading commercialization efforts in autonomous systems and space technologies.
          </span>
        </blockquote>
      </div>
      <div className={styles.recordRow}>
        <div className={styles.recordBox}>
          <h3 className={styles.recordBoxTitle}>Smart Mobility</h3>
          <ul className={styles.recordList}>
            <li>지능형 로봇 솔루션 제공</li>
            <li>AMR 제조사 및 도시 모빌리티 기업 대상</li>
            <li>안전하고 정밀한 자율주행 향상</li>
          </ul>
          <div className={styles.hashtags}>#SmartMobility #AutonomousRobotics #RoboticsPlatform</div>
        </div>
        <div className={styles.recordBox}>
          <h3 className={styles.recordBoxTitle}>Cloud ML/AI Platform</h3>
          <ul className={styles.recordList}>
            <li>클라우드 네이티브 ML/AI 인프라 제공</li>
            <li>스타트업과 기업의 모델 개발·학습·배포 지원</li>
            <li>AWS 기반의 확장성과 유연성 제공</li>
          </ul>
          <div className={styles.hashtags}>#AWSML #MLOps #CloudAI</div>
        </div>
        <div className={styles.recordBox}>
          <h3 className={styles.recordBoxTitle}>Industrial AI</h3>
          <ul className={styles.recordList}>
            <li>제조업 및 공공서비스 대상 실용적 AI 제공</li>
            <li>예측 분석 및 지능형 자동화를 통한 운영 최적화</li>
          </ul>
          <div className={styles.hashtags}>#IndustrialAI #AIBasedOptimization #SmartDecisionMaking</div>
        </div>
      </div>
      <div className={styles.recordHeader}>
        <h2 className={styles.recordTitle}>Collaborating organizations</h2>
      </div>
      <div className={styles.collabRow}>
        <div className={styles.collabBox}>
          <h3 className={styles.collabBoxTitle}>공기업 & 연구기관</h3>
          <div className={styles.collabImgRow}>
            <img className={styles.collabImg} src={institution1} alt="공기업&연구기관 로고1" />
          </div>
        </div>
        <div className={styles.collabDivider}></div>
        <div className={styles.collabBox}>
          <h3 className={styles.collabBoxTitle}>국내 기업</h3>
          <div className={styles.collabImgRow}>
            <img className={styles.collabImg} src={comp1} alt="국내기업 로고1" />
            <img className={styles.collabImg} src={comp2} alt="국내기업 로고2" />
          </div>
        </div>
        <div className={styles.collabDivider}></div>
        <div className={styles.collabBox}>
          <h3 className={styles.collabBoxTitle}>대학</h3>
          <div className={styles.collabImgRow}>
            <img className={styles.collabImg} src={uni1} alt="대학 로고1" />
            <img className={styles.collabImg} src={uni2} alt="대학 로고2" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Component4;
