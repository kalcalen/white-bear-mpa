import React from "react";
import saveIcon from "../../icons/save.svg";
import AppTemplate from "../ui/AppTemplate";
import memoryCards from "../../mock-data/memory-cards";

const memoryCard = memoryCards[0];

export default function CreateImagery() {
   return (
      <AppTemplate>
         <h4 className="my-4 text-center text-primary text-muted">
            Add memorable imagery
         </h4>
         <div className="mb-2">
            <div className="card bg-primary">
               <div className="card-body">
                  <textarea rows="11" className="d-sm-none"></textarea>
                  <textarea rows="6" className="d-none d-sm-block"></textarea>
               </div>
            </div>
            <div className="card bg-secondary">
               <div className="card-body">{memoryCard.answer}</div>
            </div>
         </div>
         <p className="float-right mb-5">0/240</p>
         <div className="clearfix"></div>
         <a id="back2-answer" className="btn btn-link" href="create-answer">
            Back to answer
         </a>
         <div className="float-right">
            <a
               className="btn btn-lg btn-primary float-right"
               id="save-imagery"
               href="create-answer"
            >
               <img
                  src={saveIcon}
                  width="20px"
                  style={{ marginBottom: "5px", marginRight: "4px" }}
                  alt=""
               />
               Save
            </a>
         </div>
      </AppTemplate>
   );
}
