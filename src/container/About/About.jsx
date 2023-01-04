import React from "react";
import "./About.scss";
import { motion } from "framer-motion";

import sobremim from "../../data/aboutme";

import AppWrap from '../../wrapper/AppWrap'

function About() {
  return (
    <>
      <h2 className="head-text">
        Um Pouco<span> Sobre A Minha </span>
        <br />
        História <span>Neste Mundo!</span>
      </h2>

      <div className="app__profiles ">
        {sobremim.map((item,index)=>(
          <motion.div
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: 'tween'}}
          className="app__profile-item"
          key={item.title + index}
          >
            <img src={item.img} alt={item.title} />
            <h2 className="bold-text" style={{ marginTop: 20}}>{item.title}</h2>
            <p className="p-text" style={{ marginTop: 10}}>{item.description}</p>

          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(About, "Sobre mim", "app__whitebg");
