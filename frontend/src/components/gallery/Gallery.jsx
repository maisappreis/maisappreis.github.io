import React from "react";
import "../../main/App.css";
import "./Gallery.css";

import angular from "../../assets/angular.jpg";
import htmlCss from "../../assets/htmlCss.jpg";
import js from "../../assets/js.jpg";
import mongo from "../../assets/mongo.jpg";
import mySQL from "../../assets/mySQL.jpg";
import postgres from "../../assets/postgres.jpg";
import react from "../../assets/react.jpg";
import ts from "../../assets/ts.jpg";
import vue from "../../assets/vue.jpg";
import node from "../../assets/node.jpg";
import laptop from "../../assets/bg-laptop.jpg";

const Gallery = props =>
    <React.Fragment>
        <div id="gallery" className="gallery-area">
            <div className="bg-fixed-img">
                <img src={laptop} alt="Laptop made of codes" />
            </div>
            <div>
                <h3 className="knowledge-subtitle">GALLERY</h3>
            </div>
            <div className="knowledge-galery">
                <div className="item-galery w-2">
                    <img className="img-galery" src={js} alt="JavaScript"></img>
                </div>
                <div className="item-galery h-2">
                    <img className="img-galery" src={ts} alt="TypeScript"></img>
                </div>
                <div className="item-galery">
                    <img className="img-galery" src={vue} alt="VueJS"></img>
                </div>
                <div className="item-galery">
                    <img className="img-galery" src={htmlCss} alt="HTML e CSS"></img>
                </div>
                <div className="item-galery">
                    <img className="img-galery" src={react} alt="React"></img>
                </div>
                <div className="item-galery">
                    <img className="img-galery" src={postgres} alt="PostgreSQL"></img>
                </div>
                <div className="item-galery w-2">
                    <img className="img-galery" src={mySQL} alt="MySQL"></img>
                </div>
                <div className="item-galery w-2">
                    <img className="img-galery" src={mongo} alt="MongoDB"></img>
                </div>
                <div className="item-galery w-2">
                    <img className="img-galery" src={angular} alt="angular"></img>
                </div>
                <div className="item-galery">
                    <img className="img-galery" src={node} alt="Node JS"></img>
                </div>
            </div>
        </div>
    </React.Fragment>

export default Gallery;

// responsividade: col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4
// className="img-fluid"