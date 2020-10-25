import React, { useState } from "react";
import Item from "../../Item/Item";
import "./List.css";

function List(props) {
  const [list, setList] = useState([
    {
      id: "123",
      name: "Apple iPad Mini",
    },
    {
      id: "132",
      name: "Vespa Scooter",
    },
    {
      id: "213",
      name: "Shake Shack Milkshake",
    },
    {
      id: "312",
      name: "12oz Stumptown Coffee",
    },
  ]);

  function handleItemUpVote(idx) {
    const listCopy = [...list];
    const listItem = listCopy.splice(idx, 1)[0];
    idx !== 0
      ? listCopy.splice(idx - 1, 0, listItem)
      : listCopy.splice(list.length - 1, 0, listItem);
    setList(listCopy);
  }
  function handleItemDownVote(idx) {
    const listCopy = [...list];
    const listItem = listCopy.splice(idx, 1)[0];
    idx !== list.length - 1
      ? listCopy.splice(idx + 1, 0, listItem)
      : listCopy.splice(0, 0, listItem);
    setList(listCopy);
  }
  return (
    <div className="list-container">
      <div className="list-title">
        <h1>Your List</h1>
      </div>
      <div className="list-content">
        {list.map((item, idx) => (
          <Item
            key={item.id}
            name={item.name}
            idx={idx}
            handleItemUpVote={handleItemUpVote}
            handleItemDownVote={handleItemDownVote}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
