import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function CreateAnswer() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <h4 className="my-4 text-center text-primary text-muted">
            Add an answer
         </h4>
         <div>
            <div className="mb-2">
               <div className="card bg-primary">
                  <div className="card-body">
                     <textarea id="textBox" rows="6" cols="30"></textarea>
                  </div>
               </div>
            </div>
            <p id="count2" className="float-right">
               <span id="count">0</span>/240
            </p>
            <div className="clearfix"></div>
            <Link
               id="nextBcreate"
               to="/create-imagery"
               className="btn btn-lg btn-outline-primary float-right "
            >
               Next
            </Link>
         </div>
      </AppTemplate>
   );
}
