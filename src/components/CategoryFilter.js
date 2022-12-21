import React from "react";

function CategoryFilter({categories, handleFilter}) {
  const categoryButtons=categories.map((cat) => {
    return <button onClick={() => {handleFilter(cat)}}>{cat}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
