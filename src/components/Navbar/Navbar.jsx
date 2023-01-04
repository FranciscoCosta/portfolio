import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isOn, setisOn] = useState(false);

  const toogleTheme=()=>{
    setisOn(!isOn)
    if(isOn){
      document.querySelector("html").classList.remove('dark-mode')
    }
    else{ 
      document.querySelector("html").classList.add('dark-mode')
    }
  }
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["Home", "Sobre mim", "Projetos", "Skills", "Contacto"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <motion.div
        className="app__navbar-theme"
        onClick={() => toogleTheme()}
        transition={{ duration: 0.5 }}
        style={{
          background: isOn
            ? "linear-gradient(50deg, rgba(237,242,248,1) 15%, rgba(107,118,136,1) 86%)"
            : "linear-gradient(310deg, rgba(237,242,248,1) 15%, rgba(107,118,136,1) 86%)",
        }}
      >
        <motion.img
          src={isOn ? images.moon : images.sun}
          key={isOn ? "moon" : "sun"}
          animate={{ x: isOn ? 0 : 55, opacity: 1 }}
          transition={{ duration: 0.2 }}
        ></motion.img>
      </motion.div>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["Home", "Sobre mim", "Projetos", "Skills", "Contacto"].map(
                (item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
