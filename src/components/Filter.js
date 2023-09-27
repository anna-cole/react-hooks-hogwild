import React from "react";

function Filter({ onGreaseChange, selectedGrease }) {
  return (
    <div className="filterWrapper" >
      <span >
      <select name="filter" value={selectedGrease} onChange={onGreaseChange}>
        <option value="All">Filter by greased</option>
        <option value="Greased">Greased</option>
        <option value="Not greased">Not greased</option>
      </select>
      <select name="sort" >
        <option value="All">Sort</option>
        <option value="Name">Name</option>
        <option value="Weight">Weight</option>
      </select>
      </span>
    </div>
  )
}

export default Filter