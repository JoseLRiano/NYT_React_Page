import React from "react";
import Header from "./Header";
import HorizontalSect from "./HorizontalSect";
import SectionOne from "../Components/SectionOne";
import '../Styles/HorizontalSect.css';


const Desktop = () =>{
 return (
    <div className="Main_container" >
        <Header />
        <SectionOne >
        </SectionOne>
        <HorizontalSect />
    </div>
    );
}

export default Desktop;