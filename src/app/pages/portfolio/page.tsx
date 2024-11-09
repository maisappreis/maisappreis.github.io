import styles from "./Portfolio.module.css";
import Image from 'next/image';

export default function Portfolio() {
  return (
    <div className="flex flex-col justify-center items-center my-5">
      <h1 className={styles.title}>
        My Portfolio
      </h1>
      <hr className="hr-line" />

      <div className="flex my-5">
        <Image src="/images/dental-clinic.png" alt="dental clinic project " className="mx-2.5" width={400} height={250} quality={75} />
        <Image src="/images/gym.png" alt="gym project" className="mx-2.5" width={400} height={250} quality={75} />
        <Image src="/images/django.png" alt="django project" className="mx-2.5" width={400} height={250} quality={75} />
      </div>
      <div className="flex my-5">
        <Image src="/images/dental-clinic.png" alt="dental clinic project " className="mx-2.5" width={400} height={250} quality={75} />
        <Image src="/images/gym.png" alt="gym project" className="mx-2.5" width={400} height={250} quality={75} />
        <Image src="/images/django.png" alt="django project" className="mx-2.5" width={400} height={250} quality={75} />
      </div>
    </div>
  );
};