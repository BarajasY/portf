"use client";
import React, { useState } from "react";
import style from "../styles/showcase.module.css";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { motion, useAnimate } from "framer-motion";
import { projects } from "./Projects/Index";

const Projects = () => {
  const [BackgroundColor, setBackgroundColor] = useState([
    "#ced4dd",
    "#87e2b3",
    "#f7ebea",
    "#fbf4f5",
  ]);
  const [CircleColor, setCircleColor] = useState([
    "#ced4dd",
    "#87e2b3",
    "#f7ebea",
    "#fbf4f5",
  ]);
  const [BlockArrows, setBlockArrows] = useState(false);
  const [circle, animate] = useAnimate();
  const [project, animateProject] = useAnimate();
  const [ProjectCount, setProjectCount] = useState(0);
  const [BackgroundCount, setBackgroundCount] = useState(0);
  const [CircleCount, setCircleCount] = useState(0);

  function sumProject(projectCount: number): number {
    let value = 0;
    projectCount === 3 ? (value = 0) : (value = projectCount + 1);
    return value;
  }

  function subProject(projectCount: number): number {
    let value = 0;
    projectCount === 0 ? (value = 3) : (value = projectCount - 1);
    return value;
  }

  const nextProject = () => {
    setCircleCount(sumProject(CircleCount));
    setBlockArrows(true);
    animateProject(project.current, { x: 30, opacity: 0 });
    animate(circle.current, { scale: 100 }, { duration: 0.3 });

    setTimeout(() => {
      setBackgroundCount(sumProject(BackgroundCount));
      animate(
        circle.current,
        { scale: 1, x: "-100%", y: "-100%" },
        { duration: 0.2 }
      );
    }, 550);

    setTimeout(() => {
      animateProject(project.current, { x: 0, opacity: 1 }, { duration: 0.2 });
      setProjectCount(sumProject(ProjectCount));
      setBlockArrows(false);
    }, 900);
  };

  const prevProject = () => {
    setCircleCount(subProject(CircleCount));
    setBlockArrows(true);
    animateProject(project.current, { x: -30, opacity: 0 });
    animate(circle.current, { scale: 100 }, { duration: 0.3 });

    setTimeout(() => {
      setBackgroundCount(subProject(BackgroundCount));
      animate(
        circle.current,
        { scale: 1, x: "-100%", y: "-100%" },
        { duration: 0.2 }
      );
    }, 550);

    setTimeout(() => {
      animateProject(project.current, { x: 0, opacity: 1 }, { duration: 0.2 });
      setProjectCount(subProject(ProjectCount));
      setBlockArrows(false);
    }, 900);
  };

  return (
    <div className={style.projectsContainer}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ once: true }}
        className={style.projectsTitle}
      >
        <MdArrowBackIosNew
          onClick={() => prevProject()}
          className={style.projectsArrow}
          style={{ display: BlockArrows ? "none" : "block" }}
        />
        <h1>Projects</h1>
        <MdArrowForwardIos
          className={style.projectsArrow}
          onClick={() => nextProject()}
          style={{ display: BlockArrows ? "none" : "block" }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ once: true }}
        className={style.projectContent}
        style={{ background: BackgroundColor[BackgroundCount] }}
      >
        <div
          className={style.circle1}
          ref={circle}
          style={{ background: CircleColor[CircleCount] }}
        ></div>
        <div className={style.project} ref={project}>
          {projects[ProjectCount]}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
