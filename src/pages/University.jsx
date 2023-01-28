import React from "react";
import '../assets/style_universities.css'
import kmitphoto from '../assets/kmit.jpeg';
function University(){
    return(
        <div>
            <div class="header">
        <h3>Universities</h3>
        <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti aut maxime nobis accusamus ipsum tempore magnam ipsam, debitis iusto, architecto ab repudiandae alias et mollitia! Veniam officia vitae explicabo amet?</p>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        
        <div class="carousel-inner">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-item active" data-bs-interval="7000">
            <img src={kmitphoto} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="7000">
            <img src={kmitphoto} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="7000">
            <img src={kmitphoto} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      <hr/>
      <div class="universitiesSelect">
        <label for="selectUniversity" ><b>Select University:</b></label>
        <select class="form-select" id="selectUniversity" aria-label="Default select example">
            <option>Keshav Memorial Institute of Technology</option>
            <option>Neil Gogte Institute of Technology</option>
            <option>Keshav Memorial Engineering College</option>
        </select>
        
        
    </div>
    <hr/>
    <div class="sort">
        <label for="searchTopic"><b>Search:</b></label>
        <input type="text" id="searchTopic" placeholder="Search for topic Ex: Cancer"/>
        <button type="button" class="btn btn-primary">Search</button>
        <div class="dropdown" id="adjustButton">
            <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              Sort By
            </a>
          
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a class="dropdown-item" href="#">Date</a></li>
              <li><a class="dropdown-item" href="#">Popularity</a></li>
              
            </ul>
        </div>
        
        
    </div>
    <hr></hr>
    
    </div>


    );
}
export default University;