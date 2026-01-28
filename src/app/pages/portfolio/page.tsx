import styles from "./Portfolio.module.css";
import Image from 'next/image';

const projects = [
  { src: "/images/gym.png",
    alt: "gym project",
    width: 200, height: 180,
    description: "Web application developed to manage a gym",
    tech: "Vue.js, TypeScript and Pinia",
    demo: "https://maisappreis.github.io/upfit-gym/",
    code: "https://github.com/maisappreis/upfit-project/"
  },
  { src: "/images/dental-clinic.png",
    alt: "dental clinic project",
    width: 200, height: 180,
    description: "Web application developed to manage a dental clinic",
    tech: "React, TypeScript and Next.js",
    demo: "https://maisappreis.github.io/dental-clinic/", 
    code: "https://github.com/maisappreis/dental-clinic/"
  },
  { src: "/images/django.png",
    alt: "django project",
    width: 200, height: 180,
    description: "Django's REST API for serving front-end applications.",
    tech: "Django with Python",
    demo: "",
    code: "https://github.com/maisappreis/django-APIs/"
  }
];

export default function Portfolio() {
  return (
    <div id="portfolio"
      className="flex flex-col justify-center items-center my-5">
      <h1 className="title">
        My Portfolio
      </h1>
      <hr className="hr-line" />

      <div className={styles.content}>
        {projects.map((project, index) => (
          <div key={index} className={styles.box}>
            <Image
              src={project.src}
              alt={project.alt}
              className={styles.image}
              width={project.width}
              height={project.height}
              quality={75}
              priority
            />
            <p className="mt-4 mb-2 text-center font-bold">{project.description}</p>
            <p className="text-center text-[15px]">{project.tech}</p>
            <div className={styles.buttons}>
              {project.demo && (
                <a 
                  href={project.demo}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <button className={styles.btn}>
                    Live Demo
                  </button>
                </a>
              )}
              {project.code && (
                <a
                  href={project.code}
                  target="_blank" 
                  rel="noopener noreferrer">
                  <button className={styles.btn}>
                    See Code
                  </button>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};