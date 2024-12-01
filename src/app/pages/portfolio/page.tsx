import styles from "./Portfolio.module.css";
import Image from 'next/image';

const projects = [
  { src: "/images/dental-clinic.png",
    alt: "dental clinic project",
    width: 200, height: 180,
    description: "Web Application for a Dental Clinic",
    demo: "https://maisappreis.github.io/dental-clinic/", 
    code: "https://github.com/maisappreis/dental-clinic/"
  },
  { src: "/images/gym.png",
    alt: "gym project",
    width: 200, height: 180,
    description: "Web Application for a Gym Company",
    demo: "https://maisappreis.github.io/upfit-gym/",
    code: "https://github.com/maisappreis/upfit-project/"
  },
  { src: "/images/django.png",
    alt: "django project",
    width: 200, height: 180,
    description: "Django API to serve the front-end",
    demo: "",
    code: "https://github.com/maisappreis/django-APIs/"
  },
  { src: "/images/django.png",
    alt: "equipment locator project",
    width: 200, height: 180,
    description: "Web Application to locate equipments",
    demo: "https://maisappreis.github.io/equipment-locator/",
    code: "https://github.com/maisappreis/equipment-locator/"
  },
  { src: "/images/django.png",
    alt: "portfolio website",
    width: 200, height: 180,
    description: "My Portfolio Website",
    demo: "https://maisappreis.github.io/",
    code: "https://github.com/maisappreis/maisappreis.github.io/"
  },
];

export default function Portfolio() {
  return (
    <div id="portfolio"
      className="flex flex-col justify-center items-center my-5">
      <h1 className={styles.title}>
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
            <p className="my-4 text-center">{project.description}</p>
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