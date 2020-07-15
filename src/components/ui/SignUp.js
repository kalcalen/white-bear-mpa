import React from "react";
import classnames from "classnames";
import hash from "object-hash";
import { v4 as getuuid } from "uuid";

export default class SignUp extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isDisplayingInputs: false,
         emailError: "",
         passwordError: "",
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

   checkhasLocalPart(passwordInput, emailInput) {
      const localPart = emailInput.split("@")[0];
      console.log(localPart);
      if (localPart === "") return false;
      else if (localPart.length < 4) return false;
      else return passwordInput.includes(localPart);
   }

   async setPasswordState(passwordInput, emailInput) {
      console.log(passwordInput);

      const uniqChars = [...new Set(passwordInput)];
      if (passwordInput === "") {
         this.setState({
            passwordError: "Please create a password.",
            hasPasswordError: true,
         });
      } else if (passwordInput.length < 9) {
         this.setState({
            passwordError: "Your password must be at least 9 characters.",
            hasPasswordError: true,
         });
      } else if (this.checkhasLocalPart(passwordInput, emailInput)) {
         this.setState({
            passwordError: "Your password cannot contain your email address.",
            hasPasswordError: true,
         });
      } else if (uniqChars.length < 3) {
         this.setState({
            passwordError:
               "Your password must contain at least 3 unique characters.",
            hasPasswordError: true,
         });
      } else {
         this.setState({ passwordError: "", hasPasswordError: false });
      }
   }

   async validateAndCreateUser() {
      const emailInput = document.getElementById("signup-email-input").value;
      const passwordInput = document.getElementById("signup-password-input")
         .value;
      await this.setEmailState(emailInput);
      await this.setPasswordState(passwordInput, emailInput);
      if (
         this.state.hasEmailError === false &&
         this.state.hasPasswordError === false
      ) {
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
         <div className="offset-1 col-10 offset-sm-2 col-sm-8 offset-md-1 col-md-5 offset-lg-2 col-lg-4 offset-xl-1 col-xl-4">
            <div className="card mb-5">
               <div className="card-body landing-text">
                  <h2 className="card-title">Nice to meet you</h2>
                  <p className="mb-2">Sign up for White Bear. Free forever</p>

                  {this.state.isDisplayingInputs && (
                     <>
                        <p className="text-success mb-4">
                           Let's get you signed up!
                        </p>

                        <label className="" htmlFor="signup-email-input">
                           Email Address
                        </label>
                        <input
                           type="email"
                           className={classnames({
                              "form-control": true,
                              "mb-2": true,
                              "is-invalid": this.state.hasEmailError,
                           })}
                           id="signup-email-input"
                        />
                        {this.state.hasEmailError && (
                           <p className="text-danger">
                              {this.state.emailError}
                           </p>
                        )}

                        <p className="text-danger" id="emailError"></p>
                        <label htmlFor="signup-password-input">
                           Create a Password
                        </label>
                        <input
                           type="password"
                           className={classnames({
                              "form-control": true,
                              "mb-2": true,
                              "is-invalid": this.state.hasPasswordError,
                           })}
                           id="signup-password-input"
                        />
                        {this.state.hasPasswordError && (
                           <p className="text-danger">
                              {this.state.passwordError}
                           </p>
                        )}
                        <div className="mb-5"></div>
                        <button
                           className="btn btn-success btn-block float-right mt-3"
                           to="create-answer"
                           onClick={() => {
                              this.validateAndCreateUser();
                           }}
                        >
                           Lets go!
                        </button>
                     </>
                  )}

                  {!this.state.isDisplayingInputs && (
                     <button
                        className="btn btn-success btn-block"
                        onClick={() => {
                           this.showInputs();
                        }}
                     >
                        Sign up
                     </button>
                  )}
               </div>
            </div>
         </div>
      );
   }
}
