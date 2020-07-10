import React from "react";
import AppTemplate from "../ui/AppTemplate";
import memoryCards from "../../mock-data/memory-cards";
import MemoryCard from "../ui/MemoryCard";

export default function Allcards() {
   return (
      <AppTemplate>
         <div className="row justify-content mb-3">
            <div className="col-8">
               <input
                  className="form-control form"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
               />
            </div>
            <div className="col-4">
               <button className="btn btn-primary btn-block" type="submit">
                  Search
               </button>
            </div>
         </div>
         <div className="row justify-content mb-3">
            <div className="col-4">
               <h4 className="text-muted">Sort cards by</h4>
            </div>
            <div className="col-8">
               <select className="custom-select" id="inputGroupSelect01">
                  <option selected>Most recent</option>
                  <option value="1">Oldest</option>
                  <option value="2">Hardest</option>
                  <option value="3">Easiest</option>
               </select>
            </div>
         </div>

         {memoryCards.map((memoryCard) => {
            return (
               <MemoryCard
                  answer={memoryCard.answer}
                  imagery={memoryCard.imagery}
                  key={memoryCard.id}
               />
            );
         })}
      </AppTemplate>
   );
}
