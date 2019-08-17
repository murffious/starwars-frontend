import React from "react";


export const Previous = props => {
  return (
    <button name="previous" onClick={() => this.handleClick("previous")}>
      Previous
    </button>
  );
};
export const Next = props => (
  <button name="next" onClick={() => this.handleClick}>
    Next
  </button>
);
