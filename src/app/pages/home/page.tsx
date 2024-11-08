import styles from "./Home.module.css";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className={styles.h3}>
        Hello, I'm
      </h3>
      <h1 className={styles.h1}>
        Maisa Pierini Preis
      </h1>
      <hr className="hr-line" />
      <h3 className={styles.h3}>
        Full Stack Developer
      </h3>

      <img src="/images/me.png" alt="myself" className={styles.img} />
    </div>
  );
};