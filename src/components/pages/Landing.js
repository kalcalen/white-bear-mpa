import React from "react";
import landingBear from "../../img/logo-landing.png";

export default function Landing() {
   return (
      <>
         <div className="background-image">
            <div class="container">
               <div class="row">
                  <img src={landingBear} alt="" />
                  <h1 class="index-logo">White Bear</h1>
               </div>

               <div class="row card-index">
                  <div class="col-xl-5 offset-xl-1 col-sm-8 col-lg-8 offset-4 offset-sm-2 offset-md-2 col-10 offset-1">
                     <div class="card mb-5">
                        <div class="card-body landing-text">
                           <h2 class="card-title">Nice to meet you</h2>
                           <p class="mb-2">Sign up for White Bear.</p>
                           <p class="mb-3">Free forever.</p>
                           <button
                              id="sign-up"
                              class="btn btn-block btn-success mb-4"
                           >
                              Let's get you signed up
                           </button>

                           <div id="form-toggle">
                              <label class="text-muted" for="email">
                                 Email Address
                              </label>
                              <input
                                 class="form-control mb-3"
                                 type="email"
                                 id="emailCreate"
                                 name="email"
                              />

                              <p class="text-danger" id="emailError"></p>
                              <label class="text-muted" for="password">
                                 Password
                              </label>
                              <input
                                 class="form-control mb-3 mt-3"
                                 type="password"
                                 id="passwordCreate"
                                 name="password"
                              />
                              <div class="text-danger" id="passwordError"></div>
                              <a
                                 id="letsGo"
                                 class="btn btn-success btn-block float-right mt-3"
                                 href="create-answer"
                              >
                                 Lets go!
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div class="col-xl-5 offset-xl-1 col-sm-8 col-lg-8 offset-sm-2 col-10 offset-1">
                     <div class="card mb-5">
                        <div class="card-body landing-text">
                           <h2 class="card-title">Welcome Back</h2>
                           <p class="mb-3">
                              Log-in with your email address and password.
                           </p>
                           <form class="form-group">
                              <label class="text-muted" for="email">
                                 Email Address
                              </label>
                              <input
                                 class="form-control"
                                 type="email"
                                 id="emailWelcome"
                                 name="email"
                              />
                              <label class="text-muted" for="password">
                                 Password
                              </label>
                              <input
                                 class="form-control mb-3"
                                 type="password"
                                 id="passwordWelcome"
                                 name="password"
                              />
                              <a
                                 href="create-answer"
                                 class="btn btn-success float-right"
                              >
                                 Log in
                              </a>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
