import React from "react";
import '../assets/style_index.css'
import Alnavbar from "./Alnavbar";
import Header from "./Header";
import ResearchHighlights from "./ResearchHighlights";
import ContactUs from "./ContactUs";
function Alhome(){
    return(
        <div>
            <Alnavbar/>
            <Header/>
            <ResearchHighlights/>
            <ContactUs/>


            
            
        </div>
    );
}
export default Alhome;