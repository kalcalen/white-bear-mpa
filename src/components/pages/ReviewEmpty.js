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
         <a href="review-answer.html" className="btn btn-link">
            Previous card
         </a>
         <a
            href="review-imagery"
            className="btn btn-outline-primary float-right"
         >
            Get more cards
         </a>
      </AppTemplate>
   );
}
