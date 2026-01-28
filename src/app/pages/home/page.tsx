import { Dancing_Script } from "next/font/google";
import styles from "./Home.module.css";
import Image from 'next/image';

const dancingScript = Dancing_Script({
  weight: '700',
  subsets: ['latin'],
});

export default function HomePage() {
  return (
    <div
      className="flex flex-col justify-center items-center">
      <h3 className="text-[15px]">
        Hello, I&apos;m
      </h3>
      <h1 className={`${styles.h1} ${dancingScript.className}`}>
        Maisa Pierini Preis
      </h1>
      <hr className="hr-line" />
      <h3 className="text-[15px] text-center">
        Frontend‑focused Full Stack Developer
      </h3>

      <Image src="/images/me.png" alt="myself"
        width={400} height={500} className="mt-5"
        />
    </div>
  );
};