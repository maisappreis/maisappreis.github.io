import React from "react";
import "../../main/App.css";
import "./About.css";
import codeEye from "../../assets/code-eye2.jpg";
import codeLamp from "../../assets/code-lamp.jpg";

const About = props =>
    <div className="about-area container-fluid" id="about">
        <div className="about-flex row">
            <div className="about about-item">
                <h3 className="about-subtitle">SOBRE</h3>
                <p className="about-text">
                    Apenas recentemente descobri minha paixão pela área de Desenvolvimento de
                    Softwares. Nos últimos meses venho estudando de 8h à 10h diárias, fazendo diversos
                    cursos e praticando bastante. Apesar de ainda inexperiente, desejo muito ingressar
                    nessa área, e tenho certeza de que aprenderei rapidamente e serei de grande colaboração
                    para minha equipe. Sou proativa, organizada, e muito disposta a aprender.
                    Sou graduada em Administração pela UDESC, trabalhei como CLT na área, mas decidi voltar
                    para minha cidade natal e ter teu próprio negócio, o qual estou há 4 anos e meio, 
                    trabalhando com Impressão 3D. Recentemente iniciei uma pós-graduação em Análise e
                    Devenvolvimento de Programas e estou ansiosa por uma oportunidade para ingressar na área de TI.
                </p>
            </div>
            <div className="about-item less-height">
                <img src={codeEye} alt="Codes in the eyes" />
            </div>
        </div>
        <div className="about-flex row">
            <div className="about-item display-none">
                <img src={codeLamp} alt="A lamp with codes inside" />
            </div>
            <div className="profile about-item" >
                <h3 className="profile-subtitle">PERFIL</h3>
                <ul className="profile-text">
                    <li><b className="purple-text">Nome:</b> Maisa Pierini Preis.</li>
                    <li><b className="purple-text">Nasc.:</b> 23 de Março de 1994.</li>
                    <li><b className="purple-text">Cargo:</b> Web Developer Júnior.</li>
                    <li><b className="purple-text">Inglês:</b> Intermediário - boa comunicação.</li>
                    <li><b className="purple-text">Perfil:</b> Proativa, organizada, ótima comunicação e relacionamento.</li>
                </ul>
            </div>
        </div>
    </div>


export default About;