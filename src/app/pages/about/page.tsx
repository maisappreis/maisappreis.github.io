import styles from "./About.module.css";

export default function Skills() {
  return (
    <div id="about"
      className="flex flex-col justify-center items-center my-5">
      <h1 className="title">
        About Me
      </h1>
      <hr className="hr-line" />

      <div className={styles.content}>
        <p className="text-center mx-30 whitespace-pre-line">
          {`Frontend Engineer with 3+ years of experience specializing in Vue.js and modern frontend development.
          Strong expertise in Vue 3, TypeScript, state management and frontend architecture, with React as a second core stack.

          Fullstack background with solid experience building and integrating REST APIs using Django, including
          authentication, permissions, database and production deployments.

          Focused on building scalable, maintainable products and working with remote-first teams.`}
        </p>
      </div>
    </div>
  );
};