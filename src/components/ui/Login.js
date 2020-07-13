import React from "react";
import classnames from "classnames";

export default class LogIn extends React.Component {
   constructor(props) {
      super(props);
      console.log("In a new class components");
      this.state = {
         isDisplayingInputs: false,
         emailError: "",
         hasEmailError: false,
      };
   }

   validateAndCreateUser() {
      const emailInput = document.getElementById("emailWelcome").value;
      // eslint-disable-next-line
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const lowerCasedEmailInput = emailInput.toLowerCase();
      if (emailInput === "")
         this.setState({
            emailError: "Please enter your email address.",
            hasEmailError: true,
         });
      else if (emailRegex.test(lowerCasedEmailInput) === false) {
         console.log("not a valid EMAIL");
         this.setState({
            emailError: "Please enter a valid email address.",
            hasEmailError: true,
         });
      } else {
         this.setState({ emailError: "", hasEmailError: false });
      }
   }
   render() {
      return (
         <div className="offset-1 col-10 offset-sm-2 col-sm-8 offset-md-1 col-md-5 offset-lg-1 col-lg-4 offset-xl-1 col-xl-5">
            <div className="card mb-5">
               <div className="card-body landing-text">
                  <h2 className="card-title">Welcome Back</h2>
                  <p className="mb-3">
                     Log-in with your email address and password.
                  </p>

                  <label className="text-muted" htmlFor="email">
                     Email Address
                  </label>
                  <input
                     type="email"
                     className={classnames({
                        "form-control": true,
                        "mb-2": true,
                        "is-invalid": this.state.hasEmailError,
                     })}
                     id="emailWelcome"
                  />
                  {this.state.hasEmailError && (
                     <p className="text-danger">{this.state.emailError}</p>
                  )}
                  <label className="text-muted mt-5" htmlFor="password">
                     Password
                  </label>
                  <input
                     className="form-control mb-3"
                     type="password"
                     id="passwordWelcome"
                     name="password"
                  />
                  <button
                     to="/create-answer"
                     className="btn btn-success float-right"
                     onClick={() => {
                        this.validateAndCreateUser();
                     }}
                  >
                     Log in
                  </button>
               </div>
            </div>
         </div>
      );
   }
}
