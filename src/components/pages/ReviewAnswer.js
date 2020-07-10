import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg";
import AppTemplate from "../ui/AppTemplate";
import memoryCards from "../../mock-data/memory-cards";
import { Link } from "react-router-dom";

const memoryCard = memoryCards[0];

export default function ReviewAnswer() {
   return (
      <AppTemplate>
         <div className="mb-5">
            <div className="card bg-primary">
               <div className="card-body">{memoryCard.imagery}</div>
            </div>

            <div className="card bg-secondary">
               <div className="card-body">{memoryCard.answer}</div>
            </div>
         </div>

         <Link href="edit" className="btn btn-link">
            Edit
         </Link>
         <div className="float-right">
            <Link href="review-empty" className="btn btn-outline-primary mr-4">
               Needs work
            </Link>
            <Link href="review-imagery" className="btn btn-primary">
               <img
                  src={thumbsUpIcon}
                  width="20px"
                  style={{ marginBottom: "5px", marginRight: "4px" }}
                  alt=""
               />
               Got it
            </Link>
         </div>
      </AppTemplate>
   );
}
