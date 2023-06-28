import React from "react";
import style from "../styles/links.module.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillFilePdf,
} from "react-icons/ai";

const Links = () => {
  return (
    <div className={style.linksContainer}>
      <a href="https://github.com/BarajasY" target="_blank">
        <AiFillGithub />
      </a>
      <a href="https://www.linkedin.com/in/yahirmb/" target="_blank">
        <AiFillLinkedin />
      </a>
      <a href="https://twitter.com/MrBecauseofyes" target="_blank">
        <AiFillTwitterSquare />
      </a>
      <a href="/resume.pdf" download>
        <AiFillFilePdf />
      </a>
    </div>
  );
};

export default Links;
