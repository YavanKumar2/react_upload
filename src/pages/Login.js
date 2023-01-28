import React from "react";
import "../assets/login.css";
import { Link } from 'react-router-dom';
import $ from 'jquery';
function Login() {
  

const loginButton=()=>{
  window.location.href="/Alhome";
}
  
  
  return (
    <div>
      <div class="skip">
        {/* <a href="beforeLoginHome.html">Skip for now &rarr;</a> */}
        <Link to="/">Skip for now &rarr;</Link>
      </div>
      <div class="container">
        <div class="row justify-content-center align-items-center inner-row">
          <div class="col-lg-5 col-md-7">
            <div class="form-box login-form p-md-5 p-3">
              <div class="form-title">
                <h2 class="fw-bold mb-3">Login</h2>
              </div>
              <form id="myForm" action="index.html">
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    placeholder="Email"
                    id="loginEmail"
                    required
                  />
                  <label for="loginEmail">Email</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control form-control-sm"
                    placeholder="Password"
                    id="loginPassword"
                    required
                  />
                  <label for="loginPassword">Password</label>
                </div>
                <div class="mt-3">
                  <button onClick={loginButton} class="btn btn-primary" type="submit">
                    Login
                  </button>
                </div>
              </form>
              <div class="mt-3">
                <span>Don't have an account?</span>
                <button class="p-0 border-0 bg-transparent primaryColor signup-show" onClick={()=>{$('.registration-form').show();$('.login-form').hide();}}>
                  {'  '}Sign Up
                </button>
              </div>
            </div>
            <div class="form-box registration-form p-md-5 p-3">
              <div class="form-title">
                <h2 class="fw-bold mb-3">Create Your Account</h2>
              </div>
              <form id="myForm" action="">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="User Name"
                    id="signUpUserName"
                  />
                  <label for="signUpUserName">User Name</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    placeholder="Email"
                    id="signUpEmail"
                  />
                  <label for="signUpEmail">Email</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control form-control-sm"
                    placeholder="Password"
                    id="signUpPassword"
                  />
                  <label for="signUpPassword">Password</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control form-control-sm"
                    placeholder="Confirm Password"
                    id="signUpConfirmPassword"
                  />
                  <label for="signUpConfirmPassword">Confirm Password</label>
                </div>
                <div class="mt-3">
                  <button class="btn btn-primary">Sign Up</button>
                </div>
              </form>
              <div class="mt-3">
                <span>Already have an account?</span>
                <button class="p-0 border-0 bg-transparent primaryColor login-show" onClick={()=>{$('.login-form').show();
    $('.registration-form').hide();}}>
                  {' '} Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
