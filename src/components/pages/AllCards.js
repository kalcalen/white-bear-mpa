import React from "react";
import AppTemplate from "../ui/AppTemplate";
import memoryCards from "../../mock-data/memory-cards";
import MemoryCard from "../ui/MemoryCard";

export default function Allcards() {
   return (
      <AppTemplate>
         <div class="row justify-content mb-3">
            <div class="col-8">
               <input
                  class="form-control form"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
               />
            </div>
            <div class="col-4">
               <button class="btn btn-primary btn-block" type="submit">
                  Search
               </button>
            </div>
         </div>
         <div class="row justify-content mb-3">
            <div class="col-4">
               <h4 class="text-muted">Sort cards by</h4>
            </div>
            <div class="col-8">
               <select class="custom-select" id="inputGroupSelect01">
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
