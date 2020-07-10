import React from "react";
import AppTemplate from "../ui/AppTemplate";
import memoryCards from "../../mock-data/memory-cards";
import { Link } from "react-router-dom";

const memoryCard = memoryCards[0];

export default function ReviewImagery() {
   return (
      <AppTemplate>
         <div className="mb-2">
            <div className="card bg-primary mb-5">
               <div className="card-body">{memoryCard.imagery}</div>
            </div>
         </div>

         <div className="clearfix"></div>

         <Link className="btn btn-link" href="review-answer">
            Previous card
         </Link>
         <div className="float-right">
            <Link
               href="review-answer"
               className="btn btn-outline-primary float-right"
            >
               Show answer
            </Link>
         </div>
      </AppTemplate>
   );
}
