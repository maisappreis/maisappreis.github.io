import React from "react";
import "./Timeline.css";

const Curriculum = props =>
    <section id="timeline">
        <div className="timeline-area">
            <div className="workexperience-area" id="workexperience">
                <h3 className="title">WORK EXPERIENCE</h3>
                <div className="curriculum-grid">
                    <div className="curric-item border-right">
                        <h3 className="item-title text-right">Web Developer | 09/2022 - Present</h3>
                        <h4 className="item-text text-right highligth">Morning Star Consulting - Remote - Rio de Janeiro, RJ - Brazil</h4>
                        <div className="item-text text-right">
                            <ul className="list-area">
                                <li>Design and implementation of user-friendly screens in web applications using Vue.js framework in the front-end.</li>
                                <li>Development of APIs on the backend using the Django framework to handle front-end requests.</li>
                                <li>Diagnose, resolve bugs, test and refactor web application codes.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="curric-item blank"></div>
                    <div className="curric-item border-right blank"></div>
                    <div className="curric-item">
                        <h3 className="item-title text-left">Entrepreneur | 02/2018 - 09/2022</h3>
                        <h4 className="item-text text-left highligth">Axis 3D - 3D Printing Studio - Criciúma, SC - Brazil</h4>
                        <div className="item-text text-left">
                            <ul className="list-area">
                                <li>Business administration, generating budgets, negotiating with customers and marketing activities. Also, 3D modeling and 3D printing.</li>
                                <li>Starting my first projects with JavaScript, HTML, CSS, Vue.js and React. Also learning SQL and Git.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="education-area" id="education">
                <h3 className="title">EDUCATION</h3>
                <div className="curriculum-grid">
                    <div className="flex-end border-right">
                        <h3 className="item-title text-right">Microsoft Certified</h3>
                        <h4 className="item-text text-right highligth">Power BI Data Analyst Associate</h4>
                        <p className="item-text text-right">11/2023 - Present</p>
                        <a className="link-area" target="_blank" rel="noopener noreferrer"
                            href="https://learn.microsoft.com/pt-br/users/maisapierinipreis-4177/credentials/23bd0e2e1d86834b">
                            <button className="bnt color">
                                See certificate 
                            </button>
                        </a>
                    </div>
                    <div className="flex-start blank"></div>
                    <div className="flex-start border-right blank"></div>
                    <div className="flex-start">
                        <h3 className="item-title text-left">Data Analysis</h3>
                        <h4 className="item-text text-left highligth">Lato Sensu in Data Analysis at Descomplica College</h4>
                        <p className="item-text text-left">06/2022 - 02/2023</p>
                        <a className="link-area" target="_blank" rel="noopener noreferrer"
                            href="https://drive.google.com/file/d/19kfGpPeIVFdpw2qAjd9lqAhy8G9Bw_pR/view?usp=drive_link">
                            <button className="bnt color">
                                See certificate 
                            </button>
                        </a>
                    </div>
                    <div className="flex-end border-right">
                        <h3 className="item-title text-right">Software Analysis and Development</h3>
                        <h4 className="item-text text-right highligth">Lato Sensu in Software Analysis and Development at Descomplica College</h4>
                        <p className="item-text text-right">06/2022 - 01/2023</p>
                        <a className="link-area" target="_blank" rel="noopener noreferrer"
                            href="https://drive.google.com/file/d/19htM8iJUn5fGy91Iz17kFtspE9Pa2HKT/view?usp=drive_link">
                            <button className="bnt color">
                                See certificate 
                            </button>
                        </a>
                    </div>
                    <div className="flex-start blank"></div>
                    <div className="flex-start border-right blank"></div>
                    <div className="flex-start">
                        <h3 className="item-title text-left">Bussiness Administration</h3>
                        <h4 className="item-text text-left highligth">Bachelor's in Bussiness Administration at State University of Santa Catarina</h4>
                        <p className="item-text text-left">08/2013 - 07/2017</p>
                        <a className="link-area" target="_blank" rel="noopener noreferrer"
                            href="https://drive.google.com/file/d/1CYtbULqZI5X5_3VvFfbjmKbt29E_-qiM/view?usp=drive_link">
                            <button className="bnt color">
                                See certificate 
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

export default Curriculum;