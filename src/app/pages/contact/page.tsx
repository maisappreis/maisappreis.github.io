"use client";
import { FormEvent, useState } from "react";
import styles from "./Contact.module.css";

const contacts = [
  { name: "Email", contact: "maisapierinipreis@gmail.com" },
  { name: "WhatsApp", contact: "+55 48 9 9603 0183" },
  { name: "Linkedin", contact: "@maisa-pp-2303" },
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

      <div className="flex">
        <div className="flex flex-col my-5">
          {contacts.map((contact, index) => (
            <div key={index} className={`${styles.box} flex flex-col justify-center items-center`}>
              <h5 className={styles.name}>{contact.name}</h5>
              <p className={styles.contact}>{contact.contact}</p>
            </div>
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

            <button type="submit" className={styles.button}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};