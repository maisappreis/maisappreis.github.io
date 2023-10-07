import React from "react";
import "./Curriculum.css";

import bgProjects from "../../assets/bg-projects.jpg";

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