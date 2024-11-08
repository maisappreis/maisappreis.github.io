import styles from "./Portfolio.module.css";

export default function Portfolio() {
  return (
    <div className="flex flex-col justify-center items-center my-5">
      <h1 className={styles.title}>
        My Portfolio
      </h1>
      <hr className="hr-line" />

      <div className="flex my-5">
        <img src="/images/dental-clinic.png" alt="dental clinic project " className="max-h-60 mx-2.5" />
        <img src="/images/gym.png" alt="gym project" className="max-h-60 mx-2.5" />
        <img src="/images/django.png" alt="django project" className="max-h-60 mx-2.5" />
      </div>
      <div className="flex my-5">
        <img src="/images/dental-clinic.png" alt="dental clinic project " className="max-h-60 mx-2.5" />
        <img src="/images/gym.png" alt="gym project" className="max-h-60 mx-2.5" />
        <img src="/images/django.png" alt="django project" className="max-h-60 mx-2.5" />
      </div>
    </div>
  );
};