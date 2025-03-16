"use client";
import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: { x: number; y: number; radius: number; speed: number }[] = [];
    const numStars = 100;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
    };

    // Create stars
    const createStars = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1, // Slightly bigger stars
          speed: Math.random() * 0.2 + 0.1, // Slower speed
        });
      }
    };

    // Animate stars
    const animateStars = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)"; // Soft white stars

      // Apply blur effect
      ctx.shadowBlur = 7;
      ctx.shadowColor = "rgba(255, 255, 255, 0.8)";

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        star.y += star.speed;

        // Reset star position when it goes out of view
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animateStars);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animateStars();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <section id="home" className={styles.heroSection}>
      {/* Canvas for Stars Animation */}
      <canvas ref={canvasRef} className={styles.starsCanvas}></canvas>

     
      <div className={styles.content}>
        <p className={styles.introText}>Hi, I am</p>

        <div className={styles.flip}>
          <div><div>Rashi Sharma</div></div>
          <div><div>a Software Engineer</div></div>
          <div><div>a Full Stack Developer</div></div>
          <div><div>a Passionate Coder</div></div>
        </div>

        <p className={styles.description}>
          I build <b>scalable web applications</b> with modern technologies.
          Passionate about <b>clean code, design, and problem-solving</b>.
        </p>

        <a href="#contact" className={styles.contactBtn}>
        {"Let's Connect 🚀"}
        </a>
      </div>
    </section>
  );
};

export default Hero;
