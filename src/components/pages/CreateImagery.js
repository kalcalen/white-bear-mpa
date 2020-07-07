import React from "react";
import saveIcon from "../../icons/save.svg";
import appLogo from "../../icons/logo-app.svg";

export default function CreateImagery() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
               <img src={appLogo} width="32px;" alt="White Bear logo" />
               <h3 className="d-inline text-brand">White Bear</h3>
               <button href="index.html" className="btn btn-link float-right">
                  Log out
               </button>
               <div
                  className="btn-group d-flex"
                  role="navigation"
                  aria-label="navigation"
               >
                  <button
                     href="create-answer.html"
                     type="button"
                     className="btn btn-secondary tab-active"
                  >
                     Create New
                  </button>

                  <button
                     href="review-answer.html"
                     type="button"
                     className="btn btn-secondary"
                  >
                     Review
                  </button>

                  <button
                     href="all-cards.html"
                     type="button"
                     className="btn btn-secondary tab-separator"
                  >
                     All cards
                  </button>
               </div>
               <h4 className="my-4 text-center text-primary text-muted">
                  Add memorable imagery
               </h4>
               <div className="mb-2">
                  <div className="card bg-primary">
                     <div className="card-body">
                        <textarea rows="11" className="d-sm-none">
                           {" "}
                        </textarea>
                        <textarea
                           rows="6"
                           className="d-none d-sm-block"
                        ></textarea>
                     </div>
                  </div>

                  <div className="card bg-secondary">
                     <div className="card-body">
                        One morning, when Gregor Samsa woke from troubled
                        dreams, he found himself transformed in his bed into a
                        horrible vermin. He lay on his armour-like back, and if
                        he lifted his head a little he could see his brown
                        belly, slightly domed and divided by arches into stiff
                        sections. The bedding was hardly.
                     </div>
                  </div>
               </div>
               <p className="float-right mb-5">0/240</p>``
               <div className="clearfix"></div>
               <button id="back2-answer" className="btn btn-link">
                  Back to answer
               </button>
               <div className="float-right">
                  <button
                     className="btn btn-lg btn-primary float-right"
                     id="save-imagery"
                  >
                     <img
                        src={saveIcon}
                        width="20px"
                        style={{ marginBottom: "5px", marginRight: "4px" }}
                        alt=""
                     />
                     Save
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
