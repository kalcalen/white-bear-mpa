import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";

export default function ReviewEmpty() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <h2 class="text-muted text-center my-3">Out of cards</h2>
         <button href="review-answer.html" className="btn btn-link">
            Previous card
         </button>
         <button
            href="create-answer.html"
            className="btn btn-outline-primary float-right"
         >
            Get more cards
         </button>
      </AppTemplate>
   );
}
