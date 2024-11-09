import styles from "./Education.module.css";

export default function Education() {
  return (
    <div className="flex flex-col justify-center items-center my-5">
      <h1 className={styles.title}>
        My Education
      </h1>
      <hr className="hr-line" />

      <div className="flex my-40">
        <div className={styles.box}>
          <p>2011</p>
          <p>Bacharel Business Administration</p>
        </div>

        <div className={`${styles.box} mt-10 mr-8`}>
          <p>2011</p>
          <p>Bacharel Business Administration</p>
        </div>

        <div className={styles.box}>
          <p>2011</p>
          <p>Bacharel Business Administration</p>
        </div>

        <div className={`${styles.box} mt-10 mr-8`}>
          <p>2011</p>
          <p>Bacharel Business Administration</p>
        </div>

        <div className={styles.box}>
          <p>2011</p>
          <p>Bacharel Business Administration</p>
        </div>

        <div className={`${styles.box} mt-10 mr-8`}>
          <p>2011</p>
          <p>Bacharel Business Administration</p>
        </div>
      </div>
    </div>
  );
};