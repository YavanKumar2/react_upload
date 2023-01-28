import React from "react";
import '../assets/style_index.css';
import business from '../assets/business.jpg';
import computer from '../assets/computer.jpg';
import environment from '../assets/environmental.jpg';
import forensics from '../assets/forensics.jpg';
import media from '../assets/media.jpg';
import medical from '../assets/medical.jpg';
import organic from '../assets/organic.jpg';
import science from '../assets/science.png';
import social from '../assets/Social.jpg';
function ResearchHighlights(){
    return(
        <div>
            <div id="ResearchHighlights">
          <h2>Research Highlights</h2>
          <br></br>
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel carousel-dark"
          >
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="4000">
                <div class="cards-wrapper">
                  <div class="card research_cards">
                    <img
                      src={organic}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title ">Organic Chemistry</h5>
                      <p class="card-text ">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" class="btn btn-primary">
                        View more from this field
                      </a>
                    </div>
                  </div>
                  <div class="card research_cards">
                    <img
                      src={media}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title ">Media and Communications</h5>
                      <p class="card-text ">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" class="btn btn-primary">
                        View more from this field
                      </a>
                    </div>
                  </div>
                  <div class="card research_cards">
                    <img
                      src={medical}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title ">
                        Medical,Healthcare and Life Sciences
                      </h5>
                      <p class="card-text ">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" class="btn btn-primary">
                        View more from this field
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="4000">
                <div class="cards-wrapper">
                  <div class="card research_cards">
                    <img
                      src={environment}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">
                        Environmental and Agricultural Sciences
                      </h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" class="btn btn-primary">
                        View more from this field
                      </a>
                    </div>
                  </div>
                  <div class="card research_cards">
                    <img
                      src={computer}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">
                        Computer Science and Information Technology
                      </h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" class="btn btn-primary">
                        View more from this field
                      </a>
                    </div>
                  </div>
                  <div class="card research_cards">
                    <img
                      src={business}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Business and Management</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" class="btn btn-primary">
                        View more from this field
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="4000">
                <div class="cards-wrapper">
                  <div class="card research_cards">
                    <img
                      src={social}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Social Sciences and Humanities</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" class="btn btn-primary">
                        View more from this field
                      </a>
                    </div>
                  </div>
                  <div class="card research_cards">
                    <img
                      src={forensics}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Security and Forensics</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" class="btn btn-primary">
                        View more from this field
                      </a>
                    </div>
                  </div>
                  <div class="card research_cards">
                    <img
                      src={science}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Science and Engineering</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" class="btn btn-primary">
                        View more from this field
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          
        </div>
        </div>
    );
}
export default ResearchHighlights;