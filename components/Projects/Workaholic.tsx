import { FaJava } from "react-icons/fa";
import {
  SiCss3,
  SiHtml5,
  SiMysql,
  SiReact,
  SiSpring,
  SiTypescript,
} from "react-icons/si";
import style from "@/styles/project.module.css";
import Image from "next/image";
import workaholic from "@/public/workaholic..webp";
import Link from "next/link";

const Workaholic = () => {
  return (
    <div className={style.projectContainer}>
      <div className={style.wrapper}>
        <div className={style.projectDescription}>
          <h1>Workaholic</h1>
          <p>A Full-Stack web application about a job board.</p>
          <p>
            In this app users can create an account either as a company or as a
            worker, then post or search jobs.
          </p>
          <p id={style.stack}>Tech Stack</p>
          <div className={style.stackIcons}>
            <section>
              <article>
                <SiTypescript className={style.icon} />
                <SiReact className={style.icon} />
                <SiCss3 className={style.icon} />
                <SiHtml5 className={style.icon} />
                <FaJava className={style.icon} />
                <SiSpring className={style.icon} />
                <SiMysql className={style.icon} />
              </article>
            </section>
          </div>
        </div>
        <div className={style.projectImage}>
          <Image
            src={workaholic}
            alt="ShutIt"
            className={style.image}
            id={style.ShutItImage}
          />
        </div>
      </div>
      <div className={style.projectLinks}>
        <Link href="https://github.com/BarajasY/Workaholic" target="_blank">
          Github
        </Link>
      </div>
    </div>
  );
};

export default Workaholic;
