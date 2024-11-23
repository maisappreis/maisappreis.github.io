'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBriefcase, faBook, faGraduationCap, faPhone } from '@fortawesome/free-solid-svg-icons';
import style from "./styles/Sidebar.module.css";

export default function Sidebar() {
// export default function Sidebar({ onOptionClick }: {onOptionClick: (option: string) => void}) {
  const handleOptionClick = (option: string) => {
    console.log(option);
    // onOptionClick(option);
  };

  return (
      <aside className={style.sidebar}>
        <ul className={style.list}>
          <li className={style.option} onClick={() => handleOptionClick("home")}>
            <FontAwesomeIcon icon={faHouse} className={style.icon} />
            {/* <span className={style.text}>Home</span> */}
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