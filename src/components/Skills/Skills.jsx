import React from 'react'
import styles from './Skills.module.css'
import { FaSquareJs, FaReact, FaHtml5, FaGitAlt, FaNode, FaCss3Alt } from 'react-icons/fa6'
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNestjs,SiTypescript, SiAxios   } from "react-icons/si";

function Skills() {
  return ( 
    <div className={styles.skills_con}>
      <h3 className={styles.skills_title} >My skill Set</h3>
      <ul className={styles.skills_list}>
      <li>
          <FaHtml5 />
        </li>
        <li>
          <FaCss3Alt />
        </li>
        <li>
          <FaSquareJs />
        </li>
        <li>
          <SiTypescript />
        </li>
        <li>
          <FaReact />
        </li>
        <li>
          <FaGitAlt />
        </li>
        <li>
          <FaNode />
        </li>
        <li>
          <RiTailwindCssFill />
        </li>
        <li>
          <SiNestjs />
        </li>
        <li>
          <SiAxios />
        </li>
      </ul>
    </div>
  )
}

export default Skills
