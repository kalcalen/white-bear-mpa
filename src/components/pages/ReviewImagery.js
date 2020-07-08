import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";

export default function ReviewImagery() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <div class="mb-2">
            <div class="card bg-primary mb-5">
               <div class="card-body">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections. The bedding was hardly.
               </div>
            </div>
         </div>

         <div class="clearfix"></div>

         <button class="btn btn-link">Previous card</button>
         <div class="float-right">
            <a
               href="review-answer.html"
               class="btn btn-outline-primary float-right"
            >
               Show answer
            </a>
         </div>
      </AppTemplate>
   );
}
