import React from "react";
import Image from "next/image";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>The Keokuk Principle</h1>
        <iframe
          width="900"
          height="510"
          src="https://www.youtube.com/embed/7iM5dymBBI4?si=xM1MEQfCKAq2OorI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className={styles.hero_qstn}>
          <h2>We are capable of recognizing and destroying manipulation</h2>
          <h3>Are you ready?</h3>
        </div>
        <div className={styles.hero_btn}>
          <a href="#keokuk">I'm Ready</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
