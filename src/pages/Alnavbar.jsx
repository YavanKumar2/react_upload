import React from "react";
import "../assets/style_index.css";
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from 'react-router-dom';
function Alnavbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand " href="#">
            Logo
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a> */}
                <NavLink to="/Alhome" className="nav-link" activeClassName="active" exact>Home</NavLink>
              </li>
              <li class="nav-item">
                {/* <a class="nav-link" href="research.html">
                  Research Areas
                </a> */}
                <NavLink to="/Alresearch" className="nav-link" activeClassName="active" exact>Research Areas</NavLink>
              </li>
              <li class="nav-item">
                {/* <a class="nav-link" href="universities.html">
                  Universities
                </a> */}
                <NavLink to="/Aluniversity" className="nav-link" activeClassName="active" exact>University</NavLink>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contactUs">
                  Contact Us
                </a>
              </li>
            </ul>
            <Dropdown>
      <Dropdown.Toggle as="button"  id="dropdown-basic">
      <i class="bi bi-person-circle"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Your Activity</Dropdown.Item>
        <Dropdown.Item href="/login">Log Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

            
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Alnavbar;