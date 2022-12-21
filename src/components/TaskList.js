import React from "react";
import Task from "./Task"

function TaskList({tasks}) {
  const displayTasks=tasks.map((task) => {
    return <Task key={task.id} category={task.category} text={task.text}/>
  })

  return (
    <div className="tasks">
      {displayTasks}
    </div>
  );
}

export default TaskList;
