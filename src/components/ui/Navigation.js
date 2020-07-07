import React from "react";

export default function Navigation() {
   return (
      <div
         className="btn-group d-flex mb-5 mt-2"
         role="navigation"
         aria-label="navigation"
      >
         <button type="button" className="btn btn-secondary tab-active">
            Create New
         </button>
         <button type="button" className="btn btn-secondary">
            Review
         </button>
         <button type="button" className="btn btn-secondary tab-separator">
            All cards
         </button>
      </div>
   );
}
