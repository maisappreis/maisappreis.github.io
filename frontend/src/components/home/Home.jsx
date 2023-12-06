import React from "react";
import "./Home.css";
import "../../main/App.css";
import ImgHome from "./ImgHome";
// import UpButton from "../button/UpButton";
import ColorButton from "../button/ColorButton";


const Home = props =>
    <div id="home" className="header-area">
        <section className="header-intro">
            <ImgHome className="img" />
            <div className="header-content">
                <h1 className="title">Eleve a experiência da sua marca!</h1>
                <hr className="hr-line"/>
                <h4 className="subtitle-1">TENHA UM SITE QUE VENDE</h4>
            </div>
        </section>
        {/* <UpButton /> */}
        <ColorButton />
    </div>

export default Home;