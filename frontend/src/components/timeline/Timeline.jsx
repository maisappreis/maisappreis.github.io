import React from "react";
import "./Timeline.css";

import bgProjects from "../../assets/bg-projects.jpg";

// WORK EXPERIENCE

// Web Developer - 09/2022 - Present
// Morning Star Consulting - Remote - Rio de Janeiro, RJ - Brazil
// Design and implementation of user-friendly screens in web applications using Vue.js framework in the front-end.
// Development of APIs on the backend using the Django framework to handle front-end requests.
// Diagnose, resolve bugs, test and refactor web application codes.

// Entrepreneur - 02/2018 - 09/2022
// Axis 3D - 3D Printing Studio - Criciúma, SC - Brazil
// Business administration, generating budgets, negotiating with customers and marketing activities. Also, 3D modeling and 3D printing.
// Starting my first projects with JavaScript, HTML, CSS, Vue.js and React. Also learning SQL and Git.


// EDUCATION

// Microsoft Certified: Power BI Data Analyst Associate - 11/2023 (colocar link)

// Lato Sensu in Data Analysis - 06/2022 - 02/2023
// Faculdade Descomplica (Descomplica College)

// Lato Sensu in Software Analysis and Development - 06/2022 - 01/2023
// Faculdade Descomplica (Descomplica College)

// Bachelor’s in Bussiness Administration - 08/2013 - 07/2017
// Universidade do Estado de Santa Catarina (State University of Santa Catarina)

const Curriculum = props =>
    <section id="curriculum">
        <div className="curriculum-area">
            <div className="image-backg"></div>
            <img id="bg-image" src={bgProjects} alt="Purple background" />
            <div className="curriculum-overlay">
                <div className="curriculum-subtitle">
                    <h3 className="curriculum-subtitle-1">MINHA TRAJETÓRIA</h3>
                    <h5 className="curriculum-subtitle-2">Um pouco sobre da minha trajetória profissional e acadêmica.</h5>
                </div>
                <div className="curriculum-grid">
                    <div className="curric-item border-right">
                        <h3 className="curric-item-sub text-right">Jun/2022 - Presente</h3>
                        <h4 className="curric-item-sub-tex text-right">Pós-graduação em Análise e Desenvolvimento de Programas</h4>
                        <h4 className="curric-item-sub-tex text-right">Criciúma-SC</h4>
                    </div>
                    <div className="curric-item blank">                        
                    </div>
                    <div className="curric-item border-right blank">                        
                    </div>
                    <div className="curric-item">
                        <h3 className="curric-item-sub text-left">Abr/2022 - Presente</h3>
                        <h4 className="curric-item-sub-tex text-left">Estudando Desenvolvimento Web em tempo integral</h4>
                        <h4 className="curric-item-sub-tex text-left">Criciúma-SC</h4>
                    </div>
                    <div className="curric-item border-right">
                        <h3 className="curric-item-sub text-right">Dez/2017 - Mar/2022</h3>
                        <h4 className="curric-item-sub-tex text-right">Negócio Próprio: Axis 3D - Impressão 3D</h4>
                        <h4 className="curric-item-sub-tex text-right">Criciúma-SC</h4>
                    </div>
                    <div className="curric-item blank">                        
                    </div>
                    <div className="curric-item border-right blank">                        
                    </div>
                    <div className="curric-item">
                        <h3 className="curric-item-sub text-left">Mar/2015 - Nov/2017</h3>
                        <h4 className="curric-item-sub-tex text-left">Analista Administrativo Financeiro</h4>
                        <h4 className="curric-item-sub-tex text-left">Florianópolis-SC</h4>
                    </div>
                    <div className="curric-item border-right">
                        <h3 className="curric-item-sub text-right">Ago/2013 - Jul/2017</h3>
                        <h4 className="curric-item-sub-tex text-right">Graduação em Administração de Empresas - UDESC/ESAG</h4>
                        <h4 className="curric-item-sub-tex text-right">Florianópolis-SC</h4>
                    </div>
                </div>
            <div className="div-btn">
                    <button className="button">
                        <a href="https://drive.google.com/file/d/1g0T_HY2M-qEapWJcnCD9NItJcD2koO3y/view?usp=sharing" className="btn">
                            <span>CV COMPLETO</span>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    </section>

export default Curriculum;