import style from "@/styles/project.module.css";
import {
  SiCss3,
  SiHtml5,
  SiNextdotjs,
  SiReact,
  SiRust,
  SiTauri,
  SiTypescript,
} from "react-icons/si";
import Link from "next/link";
import shutit from "@/public/shutit.webp";
import Image from "next/image";

const ShutIt = () => {
  return (
    <div className={style.projectContainer}>
      <div className={style.wrapper}>
        <div className={style.projectDescription}>
          <h1>ShutIt Desktop App</h1>
          <p>
            A desktop application that allows you to set a timer to then{" "}
            <span>boot</span>,<span>restart</span> or <span>sleep</span> your
            computer.
          </p>
          <p id={style.stack}>Tech Stack</p>
          <div className={style.stackIcons}>
            <section>
              <p>Web</p>
              <article>
                <SiNextdotjs className={style.icon} />
                <SiTypescript className={style.icon} />
                <SiReact className={style.icon} />
                <SiCss3 className={style.icon} />
                <SiHtml5 className={style.icon} />
              </article>
            </section>
            <section>
              <p>Project</p>
              <article>
                <SiTauri className={style.icon} />
                <SiRust className={style.icon} />
                <SiNextdotjs className={style.icon} />
                <SiTypescript className={style.icon} />
              </article>
            </section>
          </div>
        </div>
        <div className={style.projectImage}>
          <Image
            src={shutit}
            alt="ShutIt"
            className={style.image}
            id={style.ShutItImage}
          />
        </div>
      </div>
      <div className={style.projectLinks}>
        <Link href="https://github.com/BarajasY/shutit" target="_blank">
          Github
        </Link>
        <Link href="https://shutitweb.vercel.app/" target="_blank">
          Website
        </Link>
      </div>
    </div>
  );
};

export default ShutIt;
