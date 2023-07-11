"use client";
import { useState } from "react";
import style from "@/styles/email.module.css";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";

const Email = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [Submitted, setSubmitted] = useState(false);

  const Submit = () => {
    if (Name && Email && Message) {
      const serviceId = "service_khexazs";
      const templateId = "template_j2hbjri";
      const userId = "A4J3ZqVLQLup3zoex";
      const templateParams = {
        Name,
        Email,
        Message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setSubmitted(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <AnimatePresence>
      {Submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ once: true }}
          exit={{ opacity: 0, y: 50 }}
          className={style.emailContainer}
        >
          <h1>Email Submitted!</h1>
          <p>We&apos;ll soon be in contact!</p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ once: true }}
          exit={{ opacity: 0, y: 50 }}
          className={style.emailContainer}
        >
          <h1>
            Contact me <span>directly</span>!
          </h1>
          <div className={style.emailForm}>
            <div className={style.emailContactInfo}>
              <div className={style.emailName}>
                <h1>Name</h1>
                <input type="text" onChange={(e) => setName(e.target.value)} />
              </div>
              <div className={style.emailContact}>
                <h1>Email</h1>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
            <div className={style.emailMessage}>
              <h1>Message</h1>
              <textarea
                cols={30}
                rows={10}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <button onClick={() => Submit()}>Submit</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Email;
