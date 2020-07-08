import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import saveIcon from "../../icons/save.svg";

export default function Edit() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <h4 class="my-4 text-center text-primary text-muted">Edit card</h4>

         <div class="mb-2">
            <div class="card bg-primary">
               <div class="card-body">
                  <textarea rows="11" class="d-sm-none">
                     {" "}
                  </textarea>
                  <textarea rows="6" class="d-none d-sm-block"></textarea>
               </div>
            </div>

            <div class="card bg-secondary">
               <div class="card-body">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections. The bedding was hardly.
               </div>
            </div>
         </div>

         <p class="float-right mb-5">0/240</p>

         <div class="clearfix"></div>

         <a href="all-cards" class="btn btn-link">
            Discards changes
         </a>
         <div class="float-right">
            <a
               href="all-cards"
               class="btn btn-lg btn-primary float-right"
               id="save-imagery"
            >
               <img
                  src={saveIcon}
                  width="20px"
                  style={{ marginBottom: "5px" }}
                  alt=""
               />
               Save
            </a>
         </div>

         <h4 class="my-4 mb-5 text-center text-primary text-muted mt-5">
            Card properties
         </h4>
         <div class="row mb-3">
            <div class="col-8">
               <p class="text-muted">Created on:</p>
            </div>
            <div class="col-4">Dec. 24, 2019</div>
         </div>
         <div class="row mb-3">
            <div class="col-8">
               <p class="text-muted">Last attempt:</p>
            </div>
            <div class="col-4">Dec. 24, 2019</div>
         </div>
         <div class="row mb-3">
            <div class="col-8">
               <p class="text-muted">Next attempt:</p>
            </div>
            <div class="col-4">Dec. 24, 2019</div>
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

         <a
            id="delete-card"
            className="btn btn-outline-danger btn-lg mt-3 mb-5"
            href="all-cards"
         >
            Delete this card
         </a>
      </AppTemplate>
   );
}
