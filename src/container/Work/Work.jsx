import React from "react";
import "./Work.scss";

import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import data from "../../data/work";

import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWraper";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animatedCard, setAnimatedCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [FiterWork, setFiterWork] = useState([]);

  useEffect(() => {
    setWorks(data);
    setFiterWork(data);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimatedCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimatedCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFiterWork(works);
      } else {
        setFiterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <>
      <h2 className="head-text">
        Alguns dos <span>meus projetos </span>
        <br /> Como dev
      </h2>
      <div className="app__work-filter">
        {[
          "UI/UX",
          "Web App",
          "React JS",
          "Em desenvolvimento",
          "React Native",
          "Full-stack",
          "All",
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-fitler-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animatedCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-porfolio"
      >
        {FiterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.img} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{ scale: [0, 0.9] }}
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_black" rel="noreferrer">
                  <motion.div
                    whileHover={{ scale: [0, 0.9] }}
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__work"),
  "Projetos",
  "app__primarybg"
);
