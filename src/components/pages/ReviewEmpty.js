import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function ReviewEmpty() {
   return (
      <AppTemplate>
         <h2 className="text-muted text-center my-3">Out of cards</h2>
         <Link href="review-answer.html" className="btn btn-link">
            Previous card
         </Link>
         <Link
            href="review-imagery"
            className="btn btn-outline-primary float-right"
         >
            Get more cards
         </Link>
      </AppTemplate>
   );
}
