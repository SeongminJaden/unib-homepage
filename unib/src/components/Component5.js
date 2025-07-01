import React from "react";
import styles from "./Component5.module.css";

function Component5() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactLeft}>
        <h2 className={styles.contactTitle}>Contact Information</h2>
        <ul className={styles.contactList}>
          <li>UNIB, Inc.</li>
          <li>경기도 하남시 미사대로520<br/>현대지식산업센터 한강미사2차 D707</li>
          <li>about@unib.kr</li>
          <li>010-1234-5678</li>
        </ul>
        <a href="mailto:example@email.com" className={styles.contactBtn}>Contact ME</a>
      </div>
      <div className={styles.contactRight}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.234964234833!2d127.2076213153107!3d37.56394297981013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cafb2e2e2e2e2%3A0x9e8a6e7e8e8e8e8e!2z7ZWc7Jq07Yq567OE7IucIOyEnOyauO2KuOuzuOq1rCDshJzsmqjtirjsv7Hqta3roZwgNTIw!5e0!3m2!1sko!2skr!4v1680000000000!5m2!1sko!2skr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Component5;
