import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.content}>
        <p className={styles.introText}>Hi, I am</p>

        {/* Animated Flipping Text */}
        <div className={styles.flip}>
          <div><div>Rashi Sharma</div></div>
          <div><div>a Software Engineer</div></div>
          <div><div>a Full Stack Developer</div></div>
          <div><div>a Passionate Coder</div></div>
        </div>

        {/* Short About Me Text */}
        <p className={styles.description}>
          I build **scalable web applications** with modern technologies.  
          Passionate about **clean code, design, and problem-solving**.
        </p>

        {/* Call to Action Button */}
        
        <a href="#contact" className={styles.contactBtn}>
          Let's Connect 🚀
        </a>
      </div>
    </section>
  );
};

export default Hero;
