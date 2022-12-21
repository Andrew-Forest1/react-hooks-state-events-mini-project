import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [filter, setfilter] = useState('All');
  const [tasks, setTasks] = useState(TASKS)

  const handleFilter = (category) => {
    setfilter(category)
  }

  const filteredTasks = tasks.filter((task) => {
    return task.category === filter
  })

  function onTaskFormSubmit(newTask){
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleFilter={handleFilter}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filter==='All' ? tasks : filteredTasks}/>
    </div>
  );
}

export default App;
