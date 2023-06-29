"use client"
import React, {useState} from "react";
import style from "../styles/stack.module.css";
import {
  FaCss3,
  FaJava,
  FaNode,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiBootstrap,
  SiExpress,
  SiFirebase,
  SiHtml5,
  SiMicrosoftsqlserver,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiRedux,
  SiSpring,
  SiTypescript,
  SiUnrealengine,
} from "react-icons/si";

const Stack = () => {
    const [Tooltip, setTooltip] = useState("")

  return (
    <div className={style.stackContainer}>
      <h1>Stack</h1>
      <p>&lt;{Tooltip}/&gt;</p>
      <div className={style.stackDivider}>
        <div className={style.stack}>
          <p>Frontend</p>
          <section>
            <FaReact className={style.stackIcon} onMouseEnter={() => setTooltip("React")}/>
            <IoLogoJavascript className={style.stackIcon}  onMouseEnter={() => setTooltip("JavaScript")}/>
            <SiTypescript className={style.stackIcon}  onMouseEnter={() => setTooltip("TypeScript")}/>
            <SiRedux className={style.stackIcon}  onMouseEnter={() => setTooltip("Redux")}/>
            <SiHtml5 className={style.stackIcon}  onMouseEnter={() => setTooltip("HTML")}/>
            <FaCss3 className={style.stackIcon}  onMouseEnter={() => setTooltip("CSS")}/>
            <SiNextdotjs className={style.stackIcon}  onMouseEnter={() => setTooltip("Next.js")}/>
            <SiBootstrap className={style.stackIcon}  onMouseEnter={() => setTooltip("Bootstrap")}/>
          </section>
        </div>
        <div className={style.stack}>
          <p>Backend</p>
          <section>
            <FaJava className={style.stackIcon}  onMouseEnter={() => setTooltip("Java")}/>
            <SiSpring className={style.stackIcon}  onMouseEnter={() => setTooltip("SpringBoot")}/>
            <FaNodeJs className={style.stackIcon}  onMouseEnter={() => setTooltip("Node.js")}/>
            <SiExpress className={style.stackIcon}  onMouseEnter={() => setTooltip("Express.js")}/>
            <FaPython className={style.stackIcon}  onMouseEnter={() => setTooltip("Python")}/>
          </section>
        </div>
        <div className={style.stack}>
          <p>Misc</p>
          <section>
            <SiPostgresql className={style.stackIcon}  onMouseEnter={() => setTooltip("PostgreSQL")}/>
            <SiFirebase className={style.stackIcon}  onMouseEnter={() => setTooltip("Firebase")}/>
            <SiMysql className={style.stackIcon}  onMouseEnter={() => setTooltip("MySQL")}/>
            <SiMicrosoftsqlserver className={style.stackIcon}  onMouseEnter={() => setTooltip("SQL Server")}/>
            <SiPostman className={style.stackIcon}  onMouseEnter={() => setTooltip("Postman")}/>
            <SiUnrealengine className={style.stackIcon}  onMouseEnter={() => setTooltip("Unreal Engine")}/>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Stack;
