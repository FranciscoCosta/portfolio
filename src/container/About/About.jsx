import React from "react";
import "./About.scss";
import { motion } from "framer-motion";

import sobremim from "../../data/aboutme";
import { useLanguage } from "../../context/LanguageContext";

import AppWrap from '../../wrapper/AppWrap'

function About() {
  const { language } = useLanguage();

  const translations = {
    en: {
      heading: "A Little<span> About My </span><br /> Story <span>In This World!</span>",
    },
    pt: {
      heading: "Um Pouco<span> Sobre A Minha </span><br /> História <span>Neste Mundo!</span>",
    }
  };

  return (
    <>
      <h2 className="head-text" dangerouslySetInnerHTML={{ __html: translations[language].heading }} />

      <div className="app__profiles ">
        {sobremim.map((item,index)=>(
          <motion.div
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: 'tween'}}
          className="app__profile-item"
          key={item.title[language] + index}
          >
            <img src={item.img} alt={item.title[language]} />
            <h2 className="bold-text" style={{ marginTop: 20}}>{item.title[language]}</h2>
            <p className="p-text" style={{ marginTop: 10}}>{item.description[language]}</p>

          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(About, "Sobre mim", "app__whitebg");
