import React from "react";
import '../assets/style_index.css';
import { NavLink } from 'react-router-dom';






function Navbar(){
  const loginPage=()=>{
    window.location.href='/login';
  }
  

  
  
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark navbarBackground">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Logo</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="beforeLoginHome.html">Home</a> */}
                <NavLink to="/" className="nav-link" activeClassName="active" exact>Home</NavLink>
              </li>
              <li class="nav-item">
                {/* <a class="nav-link" href="#">Research Areas</a> */}
                <NavLink to="/ResearchAreas" className="nav-link" activeClassName="active" exact>Research Areas</NavLink>
              </li>
              <li class="nav-item">
                {/* <a  class="nav-link" href="beforeLoginUniversities.html">Universities</a> */}
                <NavLink to="/Universities" className="nav-link" activeClassName="active" exact>Universities</NavLink>

              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contactUs">Contact Us</a>
                
              </li>  
            </ul>
      
            <div id="signUp-signIn"></div>
          <button onClick={loginPage} type="button" class="btn btn-light" id="loginButton">
            Sign In/Sign Up
          </button>
      </div>
            
          </div>
        
      </nav>
        </div>

    );

}
export default Navbar;