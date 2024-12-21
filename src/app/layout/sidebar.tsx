'use client';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBriefcase, faBook,
  faGraduationCap, faPhone } from '@fortawesome/free-solid-svg-icons';
import style from "./styles/Sidebar.module.css";

const navItens = [
  { id: "home", icon: faHouse },
  { id: "portfolio", icon: faBook },
  { id: "skills", icon: faBriefcase },
  { id: "education", icon: faGraduationCap },
  { id: "contact", icon: faPhone },
];

export default function Sidebar() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (sectionId: string) => {
    setSelectedOption(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className={style.sidebar}>
      <ul className={style.list}>
        {navItens.map((item) => (
          <li
            key={item.id}
            className={`${style.option} ${selectedOption === item.id ? style.selected : ""}`}
            onClick={() => handleOptionClick(item.id)}
          >
            <FontAwesomeIcon icon={item.icon} className={style.icon} />
          </li>
        ))}
      </ul>
    </aside>
  );
};