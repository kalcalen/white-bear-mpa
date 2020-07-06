import React from "react";
// import thumbsUpIcon from "../../icons/thumbs-up.svg";
// import Header from "../ui/Header";

export default function ReviewAnswer() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
               <img
                  src="icons/logo-app.svg"
                  width="32px;"
                  alt="White Bear logo"
               />

               <h3 className="d-inline text-brand">White Bear</h3>
               <button href="index.html" className="btn btn-link float-right">
                  Log out
               </button>
               <div
                  className="btn-group d-flex mb-5"
                  role="navigation"
                  aria-label="navigation"
               >
                  <a
                     href="create-answer.html"
                     type="button"
                     className="btn btn-secondary"
                  >
                     Create New
                  </a>
                  <button
                     type="button"
                     className="btn btn-secondary tab-separator tab-active"
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
               <div className="mb-5">
                  <div className="card bg-primary">
                     <div className="card-body">
                        One morning, when Gregor Samsa woke from troubled
                        dreams, he found himself transformed in his bed into a
                        horrible vermin. He lay on his armour-like back, and if
                        he lifted his head a little he could see his brown
                        belly, slightly domed and divided by arches into stiff
                        sections. The bedding was hardly.
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

               <a href="edit.html" className="btn btn-link">
                  Edit
               </a>
               <div className="float-right">
                  <a
                     href="review-done.html"
                     className="btn btn-outline-primary mr-4"
                  >
                     Needs work
                  </a>
                  <a href="review-done.html" className="btn btn-primary">
                     <img
                        src="/icons/thumbs-up.svg"
                        width="20px"
                        style={{ marginBottom: "5px;", marginRight: "4px" }}
                        alt=""
                     />
                     Got it
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}
