import styles from "./Education.module.css";

export default function Education() {
  return (
    <div className="flex flex-col justify-center items-center my-5">
      <h1 className={styles.title}>
        My Education
      </h1>
      <hr className="hr-line" />

      <div className={styles.history}>
        <div className={styles.box}>
          <p className={styles.date}>08/2013 - 07/2017</p>
          <p className={styles.text}>
            Bachelor's in <strong className={styles.tag}>Bussiness Administration</strong> at State University of Santa Catarina
            </p>
          <a href="https://drive.google.com/file/d/1CYtbULqZI5X5_3VvFfbjmKbt29E_-qiM/view?usp=drive_link">
            <button className={styles.btn}>
              See certificate
            </button>
          </a>
        </div>

        <div className={`${styles.box} mt-10 mr-8`}>
          <p className={styles.date}>06/2022 - 01/2023</p>
          <p className={styles.text}>Lato Sensu in <strong className={styles.tag}>
            Software Analysis and Development</strong> at Descomplica College
          </p>
          <a href="https://drive.google.com/file/d/19htM8iJUn5fGy91Iz17kFtspE9Pa2HKT/view?usp=drive_link">
            <button className={styles.btn}>
              See certificate
            </button>
          </a>
        </div>

        <div className={styles.box}>
          <p className={styles.date}>06/2022 - 02/2023</p>
          <p className={styles.text}>
            Lato Sensu in <strong className={styles.tag}>Data Analysis</strong> at Descomplica College
          </p>
          <a href="https://drive.google.com/file/d/19kfGpPeIVFdpw2qAjd9lqAhy8G9Bw_pR/view?usp=drive_link">
            <button className={styles.btn}>
              See certificate
            </button>
          </a>
        </div>

        <div className={`${styles.box} mt-10 mr-8`}>
          <p className={styles.date}>Since 07/2024</p>
          <p className={styles.text}>
            Microsoft Certified: <strong className={styles.tag}>Azure Fundamentals</strong>
          </p>
          <a href="https://learn.microsoft.com/pt-br/users/maisapierinipreis-4177/credentials/1e639117d2ba788e">
            <button className={styles.btn}>
              See certificate
            </button>
          </a>
        </div>

        <div className={styles.box}>
          <p className={styles.date}>Since 09/2024</p>
          <p className={styles.text}>
            EF SET <strong className={styles.tag}>English Certificate</strong> - B2 Upper Intermediate
          </p>
          <a href="https://cert.efset.org/aNB4vi">
            <button className={styles.btn}>
              See certificate
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};