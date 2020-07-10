import React from "react";
import Edit from "../../icons/edit.svg";
import { Link } from "react-router-dom";

export default function MemoryCard(props) {
   return (
      <div className="mb-2">
         <div className="row">
            <div className="col-10">
               <div className="card bg-primary">
                  <div className="card-body">{props.imagery}</div>
               </div>
            </div>
            <Link to="/edit" className="btn btn-link col-2">
               <img src={Edit} width="20px" alt="" />
               Edit
            </Link>
         </div>
         <div className="row">
            <div className="col-10">
               <div className="card bg-secondary">
                  <div className="card-body">{props.answer}</div>
               </div>
            </div>
         </div>
      </div>
   );
}
