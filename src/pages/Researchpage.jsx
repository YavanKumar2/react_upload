import React from "react";
import '../assets/style_research.css';
function Researchpage(){
    return(
        <div>
            <div class="header">
      <h3>Research Areas</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptas quam quidem? Nisi aliquam, ullam sit quae maiores fugiat, magnam quidem, facere ea illum accusantium. Minus est nemo quidem maxime?</p>
        <div class="selectField">
            <label for="selectSubject"><b>Select Field:</b></label>
            <select class="form-select" id="selectSubject" aria-label="Default select example">
                <option>Organic Chemistry</option>
                <option>Media and Communications</option>
                <option>Medical,Healthcare and Life Sciences</option>
                <option>Environmental and Agricultural Sciences</option>
                <option>Computer Science and Information Technology</option>
                <option>Business and Management</option>
                <option>Social Science and Humanities</option>
                <option>Security and Forensics</option>
                <option>Science and Engineering</option>
              </select>
            
        </div>
        </div>
        <hr/>
        <div class="sort">
            <label for="searchTopic"><b>Search:</b></label>
            <input type="text" id="searchTopic" placeholder="Search for topic Ex: Cancer"/>
            <button type="button" class="btn btn-primary">Search</button>
            <div class="dropdown" id="adjust">
                <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Sort By
                </a>
              
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a class="dropdown-item" href="#">Date</a></li>
                  <li><a class="dropdown-item" href="#">Popularity</a></li>
                  
                </ul>
            </div>
            
            
        </div>
        <hr/>
        
        </div>
    );
    
}
export default Researchpage;