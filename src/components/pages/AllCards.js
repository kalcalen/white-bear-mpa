import React from "react";
import saveIcon from "../../icons/save.svg";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import Edit from "../../icons/edit.svg";

export default function ReviewImagery() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
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
         <div class="mb-2">
            <div class="row">
               <div class="col-10">
                  <div class="card bg-primary">
                     <div class="card-body">
                        One morning, when Gregor Samsa woke from troubled
                        dreams, he found himself transformed in his bed into a
                        horrible vermin. He lay on his armour-like back, and if
                        he lifted his head a little he could see his brown
                        belly, slightly domed and divided by arches into stiff
                        sections. The bedding was hardly.
                     </div>
                  </div>
               </div>
               <a href="edit.html" class="btn btn-link col-2">
                  <img src={Edit} width="20px" alt="" />
                  Edit
               </a>
            </div>
            <div class="row">
               <div class="col-10">
                  <div class="card bg-secondary">
                     <div class="card-body">
                        One morning, when Gregor Samsa woke from troubled
                        dreams, he found himself transformed in his bed into a
                        horrible vermin. He lay on his armour-like back, and if
                        he lifted his head a little he could see his brown
                        belly, slightly domed and divided by arches into stiff
                        sections. The bedding was hardly.
                     </div>
                  </div>
               </div>
               <a href="edit.html" class="btn btn-link col-2">
                  <img src={Edit} width="20px" alt="" />
                  Edit
               </a>
            </div>
            <p class="float-right mb-5">0/240</p>
            <div class="clearfix"></div>
            <button class="btn btn-link">Back to answer</button>
            <div class="float-right">
               <button
                  class="btn btn-lg btn-primary float-right mb-5"
                  id="save-imagery"
               >
                  <img
                     src={saveIcon}
                     width="20px"
                     style={{ marginBottom: "5px" }}
                     alt=""
                  />
                  Save
               </button>
            </div>
         </div>
      </AppTemplate>
   );
}
