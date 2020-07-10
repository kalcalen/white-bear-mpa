import React from "react";
import AppTemplate from "../ui/AppTemplate";
import saveIcon from "../../icons/save.svg";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";
import toDisplayDate from "date-fns/format";

const memoryCard = memoryCards[0];

export default function Edit() {
   return (
      <AppTemplate>
         <p className="my-4 text-center text-primary text-muted">Edit card</p>

         <div className="mb-2">
            <div className="card bg-primary">
               <div className="card-body">
                  <textarea
                     rows="11"
                     className="d-sm-none"
                     defaultValue={memoryCard.imagery}
                  ></textarea>
                  <textarea
                     rows="6"
                     className="d-none d-sm-block"
                     defaultValue={memoryCard.imagery}
                  ></textarea>
               </div>
            </div>
         </div>

         <div className="card">
            <div className="card-body bg-secondary">
               <textarea
                  rows="11"
                  className="d-sm-none"
                  defaultValue={memoryCard.answer}
               ></textarea>
               <textarea
                  rows="6"
                  className="d-none d-sm-block"
                  defaultValue={memoryCard.answer}
               ></textarea>
            </div>
         </div>

         <p className="float-right mb-5">0/240</p>

         <div className="clearfix"></div>

         <Link to="all-cards" className="btn btn-link">
            Discards changes
         </Link>
         <div className="float-right">
            <Link
               to="all-cards"
               className="btn btn-lg btn-primary float-right"
               id="save-imagery"
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
