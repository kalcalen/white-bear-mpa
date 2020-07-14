import React from "react";
import classnames from "classnames";
import hash from "object-hash";
import { v4 as getuuid } from "uuid";

export default class LogIn extends React.Component {
   constructor(props) {
      super(props);
      console.log("In a new class components");
      this.state = {
         isDisplayingInputs: false,
         emailError: "",
         hasEmailError: false,
         hasPasswordError: false,
      };
   }

   showInputs() {
      this.setState({
         isDisplayingInputs: true,
      });
   }

   async setEmailState(emailInput) {
      console.log(emailInput);
      const lowerCasedEmailInput = emailInput.toLowerCase();
      console.log(lowerCasedEmailInput);

      // eslint-disable-next-line
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

   async setPasswordState(passwordInput) {
      if (passwordInput === "") {
         this.setState({
            passwordError: "Please enter your password.",
            hasPasswordError: true,
         });
      } else {
         this.setState({ passwordError: "", hasPasswordError: false });
      }
   }

   async validateAndCreateUser() {
      const emailInput = document.getElementById("login-email-input").value;
      const passwordInput = document.getElementById("login-password-input")
         .value;
      await this.setEmailState(emailInput);
      await this.setPasswordState(passwordInput, emailInput);
      if (this.state.hasEmailError === false) {
         const user = {
            id: getuuid(),
            email: emailInput,
            password: hash(passwordInput),
            createdAt: Date.now(),
         };
         console.log(user);
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

                  <label className="text-muted" htmlFor="login-email-input">
                     Email Address
                  </label>
                  <input
                     type="email"
                     className={classnames({
                        "form-control": true,
                        "mb-2": true,
                        "is-invalid": this.state.hasEmailError,
                     })}
                     id="login-email-input"
                  />
                  {this.state.hasEmailError && (
                     <p className="text-danger">{this.state.emailError}</p>
                  )}
                  <label
                     className="text-muted mt-5"
                     htmlFor="login-password-input"
                  >
                     Password
                  </label>
                  <input
                     type="password"
                     className={classnames({
                        "form-control": true,
                        "mb-2": true,
                        "is-invalid": this.state.hasPasswordError,
                     })}
                     id="login-password-input"
                  />
                  {this.state.hasPasswordError && (
                     <p className="text-danger"> {this.state.passwordError}</p>
                  )}
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
