import React from "react";
import AppTemplate from "../ui/AppTemplate";

export default function ReviewImagery() {
   return (
      <AppTemplate>
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

         <a class="btn btn-link" href="review-answer">
            Previous card
         </a>
         <div class="float-right">
            <a href="review-answer" class="btn btn-outline-primary float-right">
               Show answer
            </a>
         </div>
      </AppTemplate>
   );
}
