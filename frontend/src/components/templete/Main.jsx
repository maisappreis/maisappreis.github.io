import React from "react";
import "../../main/App.css";

import Knowledge from "./Knowledge";
import About from "./About";
import Curriculum from "./Curriculum";
import Contacts from "./Contacts";


const Main = props => 
        <main>
            <Knowledge />
            <About />
            <Curriculum />            
            <Contacts />
        </main>


export default Main;