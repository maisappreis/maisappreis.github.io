import React from "react";
import "./Home.css";
import "../../main/App.css";
import ImgHome from "./ImgHome";
import ColorButton from "../button/ColorButton";
import TransparentButton from "../button/TransparentButton";


const Home = props =>
    <div id="home" className="header-area">
        <section className="header-intro">
            <ImgHome className="img" />
            <div className="header-content">
                <h1 className="title">For a great web experience!</h1>
                <hr className="hr-line"/>
                <h4 className="subtitle-1">WEB DEVELOPER</h4>
                <div className="button-area">
                    <ColorButton />
                    <TransparentButton />
                </div>
            </div>
        </section>
    </div>

export default Home;