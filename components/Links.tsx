"use client";
import style from "../styles/links.module.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillFilePdf,
} from "react-icons/ai";
import { motion } from "framer-motion";

const Links = () => {
  return (
    <div className={style.linksContainer}>
      <motion.a
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ once: true }}
        href="https://github.com/BarajasY"
        target="_blank"
      >
        <AiFillGithub />
      </motion.a>
      <motion.a
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ once: true }}
        href="https://www.linkedin.com/in/yahirmb/"
        target="_blank"
      >
        <AiFillLinkedin />
      </motion.a>
      <motion.a
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ once: true }}
        href="https://twitter.com/MrBecauseofyes"
        target="_blank"
      >
        <AiFillTwitterSquare />
      </motion.a>
      <motion.a
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ once: true }}
        href="/Yahir Barajas SWE Resume.pdf"
        download
      >
        <AiFillFilePdf />
      </motion.a>
    </div>
  );
};

export default Links;
