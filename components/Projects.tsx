"use client";
import React, { useState } from "react";
import style from "../styles/projects.module.css";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useAnimate } from "framer-motion";

const Projects = () => {
  const [BackgroundColor, setBackgroundColor] = useState("#606071");
  const [CircleColor, setCircleColor] = useState("#8c4637");
  const [circle, animate] = useAnimate();
  const [circle2, animate2] = useAnimate();

  const nextProject = () => {
    animate(circle.current, { scale: 100 }, { duration: 1 });
    setTimeout(() => {
      setBackgroundColor("#8c4637");
      animate(
        circle.current,
        { scale: 1, x: "-50%", y: "-50%" },
        { duration: 0.2 }
      );
    }, 1000);
    setTimeout(() => {
      setCircleColor("#f4db69");
    }, 1500);
  };

  return (
    <div className={style.projectsContainer}>
      <div className={style.projectsTitle}>
        <MdArrowBackIosNew className={style.projectsArrow} />
        <h1>Projects</h1>
        <MdArrowForwardIos
          className={style.projectsArrow}
          onClick={() => nextProject()}
        />
      </div>
      <div
        className={style.projectContent}
        style={{ background: BackgroundColor }}
      >
          <div
            className={style.circle1}
            ref={circle}
            style={{ background: CircleColor }}
          ></div>
      </div>
    </div>
  );
};

export default Projects;
