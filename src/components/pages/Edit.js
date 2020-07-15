import React from "react";
import AppTemplate from "../ui/AppTemplate";
import saveIcon from "../../icons/save.svg";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";
import toDisplayDate from "date-fns/format";
import classnames from "classnames";
import { checkIsOver, MAX_CARD_CHARS } from "../utils/Helpers";

const memoryCard = memoryCards[3];

export default class Edit extends React.Component {
   constructor(props) {
      super(props);
      console.log("In the Edit component!");
      this.state = {
         answerText: memoryCard.answer,
         imageryText: memoryCard.imagery,
      };
   }

   checkHasInvalidCharCount() {
      if (
         this.state.answerText.length > MAX_CARD_CHARS ||
         this.state.answerText.length === 0 ||
         this.state.imageryText.length > MAX_CARD_CHARS ||
         this.state.imageryText.length === 0
      ) {
         return true;
      } else return false;
   }

   setImageryText(e) {
      this.setState({ imageryText: e.target.value });
   }

   setAnswerText(e) {
      this.setState({ answerText: e.target.value });
   }

   render() {
      return (
         <AppTemplate>
            <p className="my-4 text-center text-primary text-muted">
               Edit card
            </p>

            <div className="mb-2">
               <div className="card bg-primary">
                  <div className="card-body">
                     <textarea
                        rows="6"
                        defaultValue={memoryCard.imagery}
                        onChange={(e) => this.setImageryText(e)}
                     ></textarea>
                  </div>
               </div>
            </div>

            <div className="card">
               <div className="card-body bg-secondary">
                  <textarea
                     rows="6"
                     defaultValue={memoryCard.answer}
                     onChange={(e) => this.setAnswerText(e)}
                  ></textarea>
               </div>
            </div>

            <p className="float-right mb-5 text-muted">
               <span
                  className={classnames({
                     "text-danger": checkIsOver(
                        this.state.imageryText,
                        MAX_CARD_CHARS
                     ),
                  })}
               >
                  {" "}
                  Top: {this.state.imageryText.length}/{MAX_CARD_CHARS}{" "}
               </span>
               &nbsp;&nbsp;&nbsp;&nbsp;{" "}
               <span
                  className={classnames({
                     "text-danger": checkIsOver(
                        this.state.answerText,
                        MAX_CARD_CHARS
                     ),
                  })}
               >
                  Bottom: {this.state.answerText.length}/{MAX_CARD_CHARS}
               </span>
            </p>

            <div className="clearfix"></div>

            <Link to="all-cards" className="btn btn-link">
               Discards changes
            </Link>
            <div className="float-right">
               <Link
                  to="all-cards"
                  className={classnames("btn btn-lg btn-primary float-right", {
                     disabled: this.checkHasInvalidCharCount(),
                  })}
                  id="save-card"
               >
                  <img
                     src={saveIcon}
                     width="20px"
                     style={{ marginBottom: "5px" }}
                     alt=""
                  />
                  Save
               </Link>
            </div>

            <h4 className="my-4 mb-5 text-center text-primary text-muted mt-5">
               Card properties
            </h4>
            <div className="row mb-3">
               <div className="col-8">
                  <p className="text-muted">Created on:</p>
               </div>
               <div className="col-4">
                  <p>{toDisplayDate(memoryCard.createdAt, "MMM.do, y")}</p>{" "}
               </div>
            </div>
            <div className="row mb-3">
               <div className="col-8">
                  <p className="text-muted">Last attempt:</p>
               </div>
               <div className="col-4">
                  <p>{toDisplayDate(memoryCard.lastAttemptAt, "MMM.d, y")}</p>{" "}
               </div>
            </div>
            <div className="row mb-3">
               <div className="col-8">
                  <p className="text-muted">Next attempt:</p>
               </div>
               <div className="col-4">
                  <p>{toDisplayDate(memoryCard.nextAttemptAt, "MMM.d, y")}</p>{" "}
               </div>
            </div>
            <div className="row mb-3">
               <div className="col-8">
                  <p className="text-muted">Consecutives:</p>
               </div>
               <div className="col-4">
                  <p>{memoryCard.totalSuccessfulAttempts}</p>{" "}
               </div>
            </div>

            <div className="custom-control custom-checkbox col-12 mb-2">
               <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
               />
               <label className="custom-control-label" htmlFor="customCheck1">
                  Show delete button
               </label>
            </div>

            <Link
               id="delete-card"
               className="btn btn-outline-danger btn-lg mt-3 mb-5"
               to="all-cards"
            >
               Delete this card
            </Link>
         </AppTemplate>
      );
   }
}
