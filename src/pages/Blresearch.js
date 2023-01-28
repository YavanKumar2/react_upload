import React from "react";
import Navbar from "./Navbar";
import Researchpage from "./Researchpage";
import Tabular from "./Tabular";
import ContactUs from "./ContactUs";

class Blresearch extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Researchpage/>
                <Tabular/>
                <ContactUs/>
                

            </div>
        );
    }
}
export default Blresearch;