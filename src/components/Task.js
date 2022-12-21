import React from "react";

function Task({key, category, text}) {
  return (
    <div className="task" key={key}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={(e) => {e.target.parentElement.remove()}} className="delete">X</button>
    </div>
  );
}

export default Task;
