import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <div className="flex flex-col justify-center items-center my-5">
      <h1 className={styles.title}>
        My Skills
      </h1>
      <hr className="hr-line" />

      <div className="flex my-5">
        <div className={styles.box}>
          Front-end
        </div>
        <div className={styles.box}>
          Back-end
        </div>
      </div>
    </div>
  );
};