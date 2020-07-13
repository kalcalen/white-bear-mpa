import React from "react";
import { Link } from "react-router-dom";

export default class LogIn extends React.Component {
   render() {
      return (
         <div className="offset-1 col-10 offset-sm-2 col-sm-8 offset-md-1 col-md-5 offset-lg-1 col-lg-4 offset-xl-1 col-xl-5">
            <div className="card mb-5">
               <div className="card-body landing-text">
                  <h2 className="card-title">Welcome Back</h2>
                  <p className="mb-3">
                     Log-in with your email address and password.
                  </p>
                  <form className="form-group">
                     <label className="text-muted" htmlFor="email">
                        Email Address
                     </label>
                     <input
                        className="form-control"
                        type="email"
                        id="emailWelcome"
                        name="email"
                     />
                     <label className="text-muted" htmlFor="password">
                        Password
                     </label>
                     <input
                        className="form-control mb-3"
                        type="password"
                        id="passwordWelcome"
                        name="password"
                     />
                     <Link
                        to="/create-answer"
                        className="btn btn-success float-right"
                     >
                        Log in
                     </Link>
                  </form>
               </div>
            </div>
         </div>
      );
   }
}
