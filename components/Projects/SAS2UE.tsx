"use client";
import React, { useState } from "react";
import style from "@/styles/project.module.css";
import {
  SiCss3,
  SiHtml5,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiUnrealengine,
} from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import { SASImages } from "./Index";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useAnimate } from "framer-motion";

const SAS2UE = () => {
  const [ImagesCount, setImagesCount] = useState(0);
  const [scope, animate] = useAnimate();

  function sumCount(count: number): number {
    let value = 0;
    count === 6 ? (value = 0) : (value = count + 1);
    return value;
  }

  function subCount(count: number): number {
    let value = 0;
    count === 0 ? (value = 6) : (value = count - 1);
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
          <h1>SAS2: Unreal Engine</h1>
          <p>
            A SAS2 Flash Player remake in 3D using <span>Unreal Engine</span>.
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
                <SiUnrealengine className={style.icon} />
              </article>
            </section>
          </div>
        </div>
        <div className={style.projectImage}>
          <IoIosArrowUp onClick={() => nextImage()} className={style.arrow} />
          <section ref={scope}>
            <Image
              src={SASImages[ImagesCount]}
              alt="SAS: Unreal Engine"
              className={style.image}
              id={style.SasImage}
            />
          </section>
          <IoIosArrowDown onClick={() => prevImage()} className={style.arrow} />
        </div>
      </div>
      <div className={style.projectLinks}>
        <Link href="https://sas2ue.vercel.app/" target="_blank">
          Website
        </Link>
      </div>
    </div>
  );
};

export default SAS2UE;
