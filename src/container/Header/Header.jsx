import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import AppWrap from '../../wrapper/AppWrap';
import { useLanguage } from '../../context/LanguageContext';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

function Header() {
  const { language } = useLanguage();

  const translations = {
    en: {
      greeting: "Hello, I am",
      role: "Web Developer",
      stack: "Full-stack."
    },
    pt: {
      greeting: "Olá, eu sou o",
      role: "Desenvolvedor Web",
      stack: "Full-stack."
    }
  };

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">{translations[language].greeting}</p>
              <h1 className="head-text">Francisco</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">{translations[language].role}</p>
            <p className="p-text">{translations[language].stack}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: [0.5] }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile-pic" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="overlay_circle"
          src={images.circle}
          alt="profile_bg"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.laravel, images.react, images.go].map((item, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={item} alt={item} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default AppWrap(Header, 'Home');
