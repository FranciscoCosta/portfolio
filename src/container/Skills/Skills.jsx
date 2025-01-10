import './Skills.scss';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWraper';

import skillslearn from '../../data/skills';
import experienceslearn from '../../data/experience';
import ReactTooltip from 'react-tooltip';
import { useLanguage } from '../../context/LanguageContext';

const Skills = () => {
  const { language } = useLanguage();
  const [experiences] = useState(experienceslearn);
  const [skills] = useState(skillslearn);

  const translations = {
    en: {
      title: "Skills & Experiences",
    },
    pt: {
      title: "Skills & Experiências",
    }
  };

  return (
    <>
      <h2 className="head-text" id='Skills'>{translations[language].title}</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year[language]}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year[language]}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name[language]}
                      key={work.name[language]}
                    >
                      <h4 className="bold-text">{work.name[language]}</h4>
                      <p className="p-text">{work.company[language]}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name[language]}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc[language]}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'Skills',
  'app__whitebg',
);