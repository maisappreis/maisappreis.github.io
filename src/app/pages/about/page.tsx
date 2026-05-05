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
          {`Frontend Developer with over 3 years of experience building modern web applications
          using JavaScript and TypeScript. I work with frameworks such as Vue.js and React, developing
          responsive, scalable, and component-based interfaces.

          I have solid experience in frontend architecture, state management, and REST API integration,
          including authentication, error handling, and application layering. I also have full-stack
          experience with Django and Python, having worked on API development, database modeling, and
          implementation of core business logic.

          I work in agile environments, collaborating with cross-functional teams to deliver continuous
          value, with a strong focus on code quality, maintainability, and long-term scalability of applications.`}
        </p>
      </div>
    </div>
  );
};