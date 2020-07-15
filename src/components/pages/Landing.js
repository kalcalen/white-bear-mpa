import React from "react";
import landingBear from "../../img/logo-landing.png";
import SignUp from "../ui/SignUp";
import LogIn from "../ui/Login";

export default function Landing() {
   return (
      <>
         <div className="background-image">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-12 mt-xl-7 mt-lg-5 mt-4">
                     <img src={landingBear} alt="" />
                     <h1 className="index-logo">White Bear</h1>
                  </div>
               </div>
               <div className="row mt-md-6 mt-xl-8 mt-4">
                  {/* <div className="col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-12"></div> */}
                  <SignUp />
                  <LogIn />
               </div>
            </div>
         </div>
      </>
   );
}
