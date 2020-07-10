import React from "react";
import AppTemplate from "../ui/AppTemplate";
import memoryCards from "../../mock-data/memory-cards";
import { Link } from "react-router-dom";

const memoryCard = memoryCards[0];

export default function ReviewImagery() {
   return (
      <AppTemplate>
         <div class="mb-2">
            <div class="card bg-primary mb-5">
               <div class="card-body">{memoryCard.imagery}</div>
            </div>
         </div>

         <div class="clearfix"></div>

         <Link class="btn btn-link" href="review-answer">
            Previous card
         </Link>
         <div class="float-right">
            <Link
               href="review-answer"
               class="btn btn-outline-primary float-right"
            >
               Show answer
            </Link>
         </div>
      </AppTemplate>
   );
}
