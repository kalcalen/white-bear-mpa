import React from "react";
import Edit from "../../icons/edit.svg";
import { Link } from "react-router-dom";

export default function MemoryCard(props) {
   return (
      <div class="mb-2">
         <div class="row">
            <div class="col-10">
               <div class="card bg-primary">
                  <div class="card-body">{props.imagery}</div>
               </div>
            </div>
            <Link to="/edit" class="btn btn-link col-2">
               <img src={Edit} width="20px" alt="" />
               Edit
            </Link>
         </div>
         <div class="row">
            <div class="col-10">
               <div class="card bg-secondary">
                  <div class="card-body">{props.answer}</div>
               </div>
            </div>
         </div>
      </div>
   );
}
