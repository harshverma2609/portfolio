
import "./HomePage.css";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typewriter from "./Typewriter";

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        markers: false,
      },
    });

    timeline
      .to("#cover", {
        scale: 2,
        z: 350,
        transformOrigin: "center center",
        ease: "power1.inOut",
      })
      .to(
        ".section.hero",
        {
          scale: 1.1,
          transformOrigin: "center center",
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".card",
        {
          zIndex: 1,
          opacity: 1, // Optional: Add a fade-in effect
          ease: "power1.inOut",
        },
        "+=0.2" // Delay to ensure it happens after cover animation
      );

    // Cleanup on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div class="wrapper">
      <div class="content">
        <section class="section hero"></section>
      </div>
      <div class="image-container" id="Home">
        <img id="cover" src={require("./images/cover2.png")} alt="cover" />
        <Typewriter
          text={[
            "Hi my name is\nHarsh Verma\n\nI’m a C++ Developer\nand Full Stack\nWeb Developer.",
          ]}
          speed={100}
          eraseSpeed={50}
          delay={1000}
          loop={true}
        />
      </div>

      <div class="card">
        {/* <div class="img">
          <img src={require("./images/logo1.png")} />
        </div> */}
        <div class="logo">
          <p>HV</p>
        </div>
        <span>About Me</span>
        <p class="info">
          I’m a recent B.Tech Graduate from DTU skilled in C++ programming and full-stack
          web development, including HTML, CSS, React.js, and Node.js.
          <br />
          I’m actively seeking a full-time role where I can leverage my strong
          work ethic, quick learning capabilities, and dedication to delivering
          exceptional results.
        </p>
        <div class="share">
          <a href="https://github.com/harshverma2609" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/harsh-verma-782a16231/" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.23 0H1.77C.792 0 0 .774 0 1.73v20.538C0 23.226.792 24 1.77 24H22.23c.978 0 1.77-.774 1.77-1.732V1.73C24 .774 23.208 0 22.23 0zM7.12 20.452H3.563V9.028H7.12v11.424zM5.342 7.593c-1.137 0-2.06-.921-2.06-2.057 0-1.137.922-2.058 2.06-2.058 1.136 0 2.057.922 2.057 2.058 0 1.137-.921 2.057-2.057 2.057zm14.426 12.859h-3.56V14.86c0-1.338-.026-3.063-1.865-3.063-1.868 0-2.153 1.46-2.153 2.967v5.688h-3.56V9.028h3.42v1.556h.049c.477-.9 1.636-1.844 3.366-1.844 3.602 0 4.27 2.37 4.27 5.448v6.264h-.001z" />
            </svg>
          </a>
          <a href="https://leetcode.com/u/_harshverma_" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 1024 1024"
            >
              <path d="M511.5 0C229.1 0 0 229.1 0 511.5S229.1 1023 511.5 1023 1023 793.9 1023 511.5 793.9 0 511.5 0zm0 930.5C276.6 930.5 93 746.9 93 511.5S276.6 93 511.5 93 930.5 276.6 930.5 511.5 746.9 930.5 511.5 930.5zM740.3 394.5l-132.7 132.7c-15.2 15.2-15.2 39.8 0 55l132.7 132.7c15.2 15.2 15.2 39.8 0 55s-39.8 15.2-55 0L585.3 637.2l-132.7 132.7c-15.2 15.2-39.8 15.2-55 0s-15.2-39.8 0-55l132.7-132.7-132.7-132.7c-15.2-15.2-15.2-39.8 0-55s39.8-15.2 55 0l132.7 132.7 132.7-132.7c15.2-15.2 39.8-15.2 55 0s15.2 39.8 0 55z" />
            </svg>
          </a>
          <a href="mailto:harshverma_17@outlook.com" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 13.065L.75 6.158V18.9h22.5V6.158L12 13.065zm0-2.13L.75 3.225v-.765h22.5v.765L12 10.935z" />
            </svg>
          </a>
        </div>
        <a href="https://drive.google.com/file/d/1A7_0o8b5br6g-1cWgJM7XmaFje-O2eXY/view" target="_blank" rel="noopener noreferrer">
          <button>Resume</button>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
