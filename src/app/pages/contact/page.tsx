"use client";
import { FormEvent, useState } from "react";
import styles from "./Contact.module.css";

const contacts = [
  { name: "Email", contact: "maisapierinipreis@gmail.com", url: "" },
  { name: "WhatsApp", contact: "+55 48 9 9603 0183", url: "https://www.cutt.ly/WhatsApp-Axis3D/" },
  { name: "Linkedin", contact: "@maisa-pp-2303", url: "https://www.linkedin.com/in/maisa-pp-2303/" },
  { name: "Github", contact: "@maisappreis", url: "https://github.com/maisappreis" },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Integrar com uma API de e-mail ou serviço de backend para enviar o formulário
    console.log("Form Data:", formData);
    // Limpa o formulário após o envio
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col justify-center items-center my-5">
      <h1 className={styles.title}>
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

        <div className={`${styles.form} flex flex-col`}>
          <form onSubmit={handleSubmit} className="w-full">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
              required
            />
            <div className="flex justify-end">
              <button type="submit" className={styles.button}>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};