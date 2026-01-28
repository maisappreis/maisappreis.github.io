import styles from "./Contact.module.css";

const contacts = [
  { name: "Email", contact: "maisapierinipreis@gmail.com", url: "https://mail.google.com/" },
  { name: "WhatsApp", contact: "+55 48 9 9603 0183", url: "https://www.cutt.ly/WhatsApp-Axis3D/" },
  { name: "Linkedin", contact: "@maisa-pp-2303", url: "https://www.linkedin.com/in/maisa-pp-2303/" },
  { name: "Github", contact: "@maisappreis", url: "https://github.com/maisappreis/" },
]

export default function Contact() {
  return (
    <div id="contact"
      className="flex flex-col justify-center items-center my-5">
      <h1 className="title">
        My Contact
      </h1>
      <hr className="hr-line" />

      <div className={styles.content}>
        <div className={`${styles.links} flex flex-col my-5`}>
          {contacts.map((contact, index) => (
            <a 
              key={index} 
              href={contact.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${styles.box} flex flex-col justify-center items-center`}
            >
              <h5 className={styles.name}>{contact.name}</h5>
              <p className={styles.contact}>{contact.contact}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};