import React from "react";

function FiltersButton(props) {
  return (
    <button
      type="button"
      className="filterBtn toggleBtn"
      aria-pressed={props.isClicked}
      onClick={() => props.setFilter(props.name)}
    > {props.name} </button>
  );
}

export default FiltersButton;
