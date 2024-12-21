import styles from "./Skills.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

const frontendSkills = [
  { tech: "HTML", years: "+2 years"},
  { tech: "CSS", years: "+2 years"},
  { tech: "Javascript", years: "+2 years"},
  { tech: "Vue.js", years: "+2 years"},
  { tech: "React", years: "+2 years"},
  { tech: "Typescript", years: "+1 year"},
  { tech: "Next.js", years: "+1 year"},
  { tech: "Bootstrap", years: "+1 year"},
  { tech: "Tailwindcss", years: "+1 year"},
];

const backendSkills = [
  { tech: "Python", years: "+2 years"},
  { tech: "Django", years: "+2 years"},
  { tech: "PostgreSQL", years: "+2 years"},
  { tech: "SQL", years: "+2 years"},
];

const otherSkills = [
  { tech: "Git", years: "+2 years"},
  { tech: "English", years: "B2 - Upper Intermediate"},
  { tech: "Portuguese", years: "Native"},
];

export default function Skills() {
  return (
    <div id="skills"
      className="flex flex-col justify-center items-center my-5">
      <h1 className={styles.title}>
        My Skills
      </h1>
      <hr className="hr-line" />

      <div className={styles.content}>
        <div className={styles.box}>
          <h3 className={styles.heading}>Front-end</h3>
          <div className="flex flex-col">
            <ul>
              {frontendSkills.map((skill, index) => (
                <li key={index} className={styles.item}>
                  <FontAwesomeIcon className={styles.icon} icon={faStar} />
                  <strong className="mr-3 ml-3">{skill.tech}</strong>
                  <span className={styles.years}>{skill.years}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.box}>
          <h3 className={styles.heading}>Back-end</h3>
          <div className="flex flex-col">
            <ul>
              {backendSkills.map((skill, index) => (
                <li key={index} className={styles.item}>
                  <FontAwesomeIcon className={styles.icon} icon={faStar} />
                  <strong className="mr-3 ml-3">{skill.tech}</strong>
                  <span className={styles.years}>{skill.years}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.box}>
          <h3 className={styles.heading}>Others</h3>
          <div className="flex flex-col">
            <ul>
              {otherSkills.map((skill, index) => (
                <li key={index} className={styles.item}>
                  <FontAwesomeIcon className={styles.icon} icon={faStar} />
                  <strong className="mr-3 ml-3">{skill.tech}</strong>
                  <span className={styles.years}>{skill.years}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};