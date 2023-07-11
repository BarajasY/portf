"use client"
import {useState} from "react";
import style from "../styles/stack.module.css";
import {
  FaCss3,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
  FaRust,
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
  SiTauri,
  SiTypescript,
  SiUnrealengine,
} from "react-icons/si";
import { motion, useAnimate } from "framer-motion";

const Stack = () => {
    const [Tooltip, setTooltip] = useState("")
    const [Tool, animate] = useAnimate();

    const handleTooltip = (tooltip:string) => {
      animate(Tool.current, {opacity: 0, x: 20})
      setTimeout(() => {
        setTooltip(tooltip);
        animate(Tool.current, {opacity: 1, x:0})
      }, 200);
    }

  return (
    <div className={style.stackContainer}>
      <h1>Stack</h1>
      <p ref={Tool}>&lt;{Tooltip}/&gt;</p>
      <div className={style.stackDivider}>
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y:0}}
          transition={{once: true, delay: .2}}
           className={style.stack}>
          <p>Frontend</p>
          <section>
            <FaReact className={style.stackIcon} onMouseEnter={() => handleTooltip("React")}/>
            <IoLogoJavascript className={style.stackIcon}  onMouseEnter={() => handleTooltip("JavaScript")}/>
            <SiTypescript className={style.stackIcon}  onMouseEnter={() => handleTooltip("TypeScript")}/>
            <SiRedux className={style.stackIcon}  onMouseEnter={() => handleTooltip("Redux Toolkit")}/>
            <SiTauri className={style.stackIcon}  onMouseEnter={() => handleTooltip("Tauri")}/>
            <SiHtml5 className={style.stackIcon}  onMouseEnter={() => handleTooltip("HTML")}/>
            <FaCss3 className={style.stackIcon}  onMouseEnter={() => handleTooltip("CSS")}/>
            <SiNextdotjs className={style.stackIcon}  onMouseEnter={() => handleTooltip("Next.js")}/>
            <SiBootstrap className={style.stackIcon}  onMouseEnter={() => handleTooltip("Bootstrap")}/>
          </section>
        </motion.div>
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y:0}}
          transition={{once: true, delay: .4}}
            className={style.stack}>
          <p>Backend</p>
          <section>
            <FaJava className={style.stackIcon}  onMouseEnter={() => handleTooltip("Java")}/>
            <SiSpring className={style.stackIcon}  onMouseEnter={() => handleTooltip("SpringBoot")}/>
            <FaNodeJs className={style.stackIcon}  onMouseEnter={() => handleTooltip("Node.js")}/>
            <SiExpress className={style.stackIcon}  onMouseEnter={() => handleTooltip("Express.js")}/>
            <FaPython className={style.stackIcon}  onMouseEnter={() => handleTooltip("Python")}/>
          </section>
        </motion.div>
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y:0}}
          transition={{once: true, delay: .8}}
            className={style.stack}>
          <p>Misc</p>
          <section>
            <SiPostgresql className={style.stackIcon}  onMouseEnter={() => handleTooltip("PostgreSQL")}/>
            <SiFirebase className={style.stackIcon}  onMouseEnter={() => handleTooltip("Firebase")}/>
            <SiMysql className={style.stackIcon}  onMouseEnter={() => handleTooltip("MySQL")}/>
            <SiMicrosoftsqlserver className={style.stackIcon}  onMouseEnter={() => handleTooltip("SQL Server")}/>
            <SiPostman className={style.stackIcon}  onMouseEnter={() => handleTooltip("Postman")}/>
            <SiUnrealengine className={style.stackIcon}  onMouseEnter={() => handleTooltip("Unreal Engine")}/>
            <FaRust className={style.stackIcon} onMouseEnter={() => handleTooltip("Rust")} />
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Stack;
