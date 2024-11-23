'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faCalendar, faHandHoldingDollar, faMoneyBillTransfer, faBook } from '@fortawesome/free-solid-svg-icons';
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
            <FontAwesomeIcon icon={faCalendar} className={style.icon}/>
            {/* <span className={style.text}>Home</span> */}
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendar} className={style.icon}/>
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendar} className={style.icon}/>
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendar} className={style.icon}/>
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendar} className={style.icon}/>
          </li>
        </ul>
    </aside >
  )
}