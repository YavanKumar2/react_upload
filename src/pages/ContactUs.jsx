import React from "react";
import '../assets/style_index.css';
function ContactUs()
{
    return(
        <div>
            <section id="contactUs">
            <footer class=" text-white pt-5 pb-4">
              <div class="container text-center text-md-left">
                <div class="row text-center text-md-left">
                  <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 contactUsTextSize">
                    <h6 class="text-uppercase mb-4 font-weight-bold text-white">
                      Company Name
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Autem iure fugiat voluptates illum. Unde dicta aut sit
                      sunt nulla placeat deserunt laborum, eos officia, suscipit
                      minus quam. Beatae, hic deserunt!
                    </p>
                  </div>

                  <div
                    class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 contactUsTextSize"
                    id="footerLinks"
                  >
                    <h6 class="text-uppercase mb-4 font-weight-bold">
                      Useful links
                    </h6>
                    <p>
                      <a href="index.html" class="text-white">
                        
                        Home
                      </a>
                    </p>
                    <p>
                      <a href="research.html" class="text-white">
                        Research Areas
                      </a>
                    </p>
                    <p>
                      <a href="universities.html" class="text-white">
                        Universities
                      </a>
                    </p>
                    <p>
                      <a href="#" class="text-white">
                        Contact Us
                      </a>
                    </p>
                  </div>

                  <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 contactUsTextSize">
                    <h6 class="text-uppercase mb-4 font-weight-bold text-white">
                      Contact
                    </h6>
                    <p>
                      <i class="bi bi-house-door-fill"></i>{" "}New York, NY
                      2333, US
                    </p>
                    <p>
                      <i class="bi bi-envelope-fill"></i>{" "}mailto@gmail.com
                    </p>
                    <p>
                      <i class="bi bi-telephone-fill"></i>{" "}000-000-0000
                    </p>
                  </div>
                </div>

                <hr class="mb-4" />

                <div class="row align-items-center">
                  <div class="col-md-7 col-lg-8 contactUsTextSize">
                    <p>
                      {" "}
                      Copyright ©2022 All rights reserved by:
                      <strong class="text-dark">Yet to decide</strong>
                    </p>
                  </div>

                  <div class="col-md-5 col-lg-4">
                    <div class="text-center text-md-right">
                      <ul class="list-unstyled list-inline">
                        <li class="list-inline-item">
                          <a href="#" class="btn-floating btn-sm text-white contactUsTextSize">
                            <i class="bi bi-facebook socialMedia"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            href="#"
                            class="btn-floating btn-sm text-white contactUsTextSize"
                            id="twitter"
                          >
                            <i class="bi bi-twitter socialMedia"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            href="#"
                            class="btn-floating btn-sm text-white contactUsTextSize"
                            id="google"
                          >
                            <i class="bi bi-google socialMedia"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </section>
        </div>
        

    );
}
export default ContactUs;