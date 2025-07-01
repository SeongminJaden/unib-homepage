import React from "react";
import styles from "./Component2.module.css";

function Component2() {
  return (
    <section className={styles.visionSection}>
      <div className={styles.visionBlock}>
        <h2 className={styles.visionTitle}>Vision</h2>
        <blockquote className={styles.visionSlogan}>
          "AI와 로보틱스를 통해 더 안전하고 효율적인 미래를 설계하다.
          <br/>Connecting technologies, expanding possibilities"
        </blockquote>
      </div>
      <div className={styles.visionBlock}>
        <h2 className={styles.visionTitle}>Main Focus/Mission Statement</h2>
        <blockquote className={styles.visionSlogan}>
          "지능형 로보틱스 기반 모빌리티, 클라우드 ML/AI 인프라, 그리고 산업을 혁신하는 실용적 AI 솔루션을 통해 미래 기술의 가능성을 현실로 만듭니다.
          <br/>We transform the potential of future technologies into reality through intelligent robotics-based mobility, cloud ML/AI infrastructure, and practical AI solutions that innovate industries."
        </blockquote>
      </div>
      <div className={styles.missionRow}>
        <div className={styles.missionBox}>
          <h3 className={styles.missionTitle}>Smart Mobility</h3>
          <ul className={styles.detailList}>
            <li>지능형 로봇 솔루션 제공</li>
            <li>AMR 제조사 및 도시 모빌리티 기업 대상</li>
            <li>안전하고 정밀한 자율주행 향상</li>
          </ul>
          <div className={styles.hashtags}>#SmartMobility #AutonomousRobotics #RoboticsPlatform</div>
        </div>
        <div className={styles.missionBox}>
          <h3 className={styles.missionTitle}>Cloud ML/AI Platform</h3>
          <ul className={styles.detailList}>
            <li>클라우드 네이티브 ML/AI 인프라 제공</li>
            <li>스타트업과 기업의 모델 개발·학습·배포 지원</li>
            <li>AWS 기반의 확장성과 유연성 제공</li>
          </ul>
          <div className={styles.hashtags}>#AWSML #MLOps #CloudAI</div>
        </div>
        <div className={styles.missionBox}>
          <h3 className={styles.missionTitle}>Industrial AI</h3>
          <ul className={styles.detailList}>
            <li>제조업 및 공공서비스 대상 실용적 AI 제공</li>
            <li>예측 분석 및 지능형 자동화를 통한 운영 최적화</li>
          </ul>
          <div className={styles.hashtags}>#IndustrialAI #AIBasedOptimization #SmartDecisionMaking</div>
        </div>
      </div>
    </section>
  );
}

export default Component2;
