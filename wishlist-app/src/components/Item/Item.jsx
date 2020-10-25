import React from "react";
import "./Item.css";

function Item(props) {
  const { name, idx, handleItemUpVote, handleItemDownVote } = props;

  function upVote() {
    handleItemUpVote(idx);
  }
  function downVote() {
    handleItemDownVote(idx);
  }
  return (
    <div className="item-container">
      <h3>{name}</h3>
      <div className="button-container">
        <button onClick={upVote}>Up</button>|
        <button onClick={downVote}>Down</button>
      </div>
    </div>
  );
}

export default Item;
