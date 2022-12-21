import React from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({categories, onTaskFormSubmit}) {
  function handleSubmit(e){
    e.preventDefault()

    const newTask = {
      id: uuid(),
      category: e.target.category.value,
      text: e.target.text.value
    }

    onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {categories.map((category) => {return <option>{category}</option>})}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
