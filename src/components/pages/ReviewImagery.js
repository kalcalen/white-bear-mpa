import React from "react";
import AppTemplate from "../ui/AppTemplate";
import memoryCards from "../../mock-data/memory-cards";

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

         <a class="btn btn-link" href="review-answer">
            Previous card
         </a>
         <div class="float-right">
            <a href="review-answer" class="btn btn-outline-primary float-right">
               Show answer
            </a>
         </div>
      </AppTemplate>
   );
}
