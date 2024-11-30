'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBriefcase, faBook, faGraduationCap, faPhone } from '@fortawesome/free-solid-svg-icons';
import style from "./styles/Sidebar.module.css";

export default function Sidebar() {
  const handleOptionClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
      <aside className={style.sidebar}>
        <ul className={style.list}>
          <li className={style.option} onClick={() => handleOptionClick("home")}>
            <FontAwesomeIcon icon={faHouse} className={style.icon} />
          </li>
          <li className={style.option} onClick={() => handleOptionClick("portfolio")}>
            <FontAwesomeIcon icon={faBook} className={style.icon} />
          </li>
          <li className={style.option} onClick={() => handleOptionClick("skills")}>
            <FontAwesomeIcon icon={faBriefcase} className={style.icon} />
          </li>
          <li className={style.option} onClick={() => handleOptionClick("education")}>
            <FontAwesomeIcon icon={faGraduationCap} className={style.icon} />
          </li>
          <li className={style.option} onClick={() => handleOptionClick("contact")}>
            <FontAwesomeIcon icon={faPhone} className={style.icon} />
          </li>
        </ul>
    </aside >
  )
}