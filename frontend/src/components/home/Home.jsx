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
                <h1 className="title">For a great web experience!</h1>
                <hr className="hr-line"/>
                <h4 className="subtitle-1">WEB DEVELOPER</h4>
            </div>
        </section>
        {/* <UpButton /> */}
        <ColorButton />
    </div>

export default Home;