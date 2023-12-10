import React from "react";
import "./Timeline.css";

const Curriculum = props =>
    <section id="curriculum">
        <div className="curriculum-area">
            <div className="workexperience-area">
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
            <div className="education-area">
                <h3 className="title">EDUCATION</h3>
                <div className="curriculum-grid">
                    <div className="flex-end border-right">
                        <h3 className="item-title text-right">Microsoft Certified | 11/2023 - Present</h3>
                        <h4 className="item-text text-right highligth">Power BI Data Analyst Associate</h4>
                        <a className="link-area" href="#portfolio">
                            <button className="bnt color">
                                See certificate 
                            </button>
                        </a>
                    </div>
                    <div className="curric-item blank"></div>
                    <div className="curric-item border-right blank"></div>
                    <div className="curric-item">
                        <h3 className="item-title text-left">Data Analysis | 06/2022 - 02/2023</h3>
                        <h4 className="item-text text-left highligth">Lato Sensu in Data Analysis at Descomplica College</h4>
                        <a className="link-area" href="#portfolio">
                            <button className="bnt color">
                                See certificate 
                            </button>
                        </a>
                    </div>
                    <div className="flex-end border-right">
                        <h3 className="item-title text-right">Software Analysis and Development | 06/2022 - 01/2023</h3>
                        <h4 className="item-text text-right highligth">Lato Sensu in Software Analysis and Development at Descomplica College</h4>
                        <a className="link-area" href="#portfolio">
                            <button className="bnt color">
                                See certificate 
                            </button>
                        </a>
                    </div>
                    <div className="curric-item blank"></div>
                    <div className="curric-item border-right blank"></div>
                    <div className="curric-item">
                        <h3 className="item-title text-left">Bussiness Administration | 08/2013 - 07/2017</h3>
                        <h4 className="item-text text-left highligth">Bachelor’s in Bussiness Administration at State University of Santa Catarina</h4>
                        <a className="link-area" href="#portfolio">
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