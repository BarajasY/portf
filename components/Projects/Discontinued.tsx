"use client"
import style from "@/styles/project.module.css";
import Image from "next/image";
import Link from "next/link";
import { SiTypescript, SiSolid, SiCss3, SiHtml5, SiRust, SiSurrealdb } from "react-icons/si";
import { discImages } from "./Index";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useAnimate } from "framer-motion";
import { useState } from "react";

const Discontinued = () => {
  const [ImagesCount, setImagesCount] = useState(0);
  const [scope, animate] = useAnimate();

  function sumCount(count: number): number {
    let value = 0;
    count === 1 ? (value = 0) : (value = count + 1);
    return value;
  }

  function subCount(count: number): number {
    let value = 0;
    count === 0 ? (value = 1) : (value = count - 1);
    return value;
  }

  const nextImage = () => {
    animate(scope.current, { opacity: 0, y: -30 });
    setTimeout(() => {
      animate(scope.current, { opacity: 1, y: 0 });
      setImagesCount(sumCount(ImagesCount));
    }, 300);
  };

  const prevImage = () => {
    animate(scope.current, { opacity: 0, y: 30 });
    setTimeout(() => {
      animate(scope.current, { opacity: 1, y: 0 });
      setImagesCount(subCount(ImagesCount));
    }, 300);
  };

  return (
    <div className={style.projectContainer}>
    <div className={style.wrapper}>
      <div className={style.projectDescription}>
        <h1>Discontinued</h1>
        <p>
          A <span>Rust</span>/<span>Solid.js</span>/<span>SurrealDB</span> Full-Stack web application featuring discontinued cars.
        </p>
        <p>The Web server for this application was created using Rust's crate <span>Axum</span> (Would appear in the tech stack but doesn't yet have an icon)</p>
        <p id={style.stack}>Tech Stack</p>
        <div className={style.stackIcons}>
          <section>
            <article>
              <SiRust className={style.icon} />
              <SiSurrealdb className={style.icon} />
              <SiTypescript className={style.icon} />
              <SiSolid className={style.icon} />
              <SiCss3 className={style.icon} />
              <SiHtml5 className={style.icon} />
            </article>
          </section>
        </div>
      </div>
      <div className={style.projectImage}>
        <IoIosArrowUp onClick={() => nextImage()} className={style.arrow} />
        <section ref={scope}>
          <Image
            src={discImages[ImagesCount]}
            alt="SAS: Unreal Engine"
            className={style.image}
            id={style.SasImage}
          />
        </section>
        <IoIosArrowDown onClick={() => prevImage()} className={style.arrow} />
      </div>
    </div>
    <div className={style.projectLinks}>
      <Link href="https://github.com/BarajasY/discontinued" target="_blank">
        Github
      </Link>
    </div>
  </div>
  )
}

export default Discontinued
