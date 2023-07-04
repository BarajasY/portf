"use client"
import React from 'react'
import style from '../styles/home.module.css';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className={style.homeContainer}>
        <div className={style.homeNames}>
          <motion.h1
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y:0}}
          transition={{once: true}}
          >Yahir</motion.h1>
          <motion.p
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y:0}}
          transition={{once: true}}
          >Software Engineer</motion.p>
        </div>
    </div>
  )
}

export default Home
