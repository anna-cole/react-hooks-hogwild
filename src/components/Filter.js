import React from "react";

function Filter({ selectedGrease, onChangeFilter, selectedSort, onChangeSort}) {
  return (
    <div className="filterWrapper" >
      <span >
      <select name="filter" value={selectedGrease} onChange={onChangeFilter}>
        <option value="All">Filter by</option>
        <option value="Greased">Greased</option>
        <option value="Not greased">Not greased</option>
      </select>
      <select name="sort" value={selectedSort} onChange={onChangeSort}>
        <option value="All">Sort by</option>
        <option value="Name">Name</option>
        <option value="Weight">Weight</option>
      </select>
      </span>
    </div>
  )
}

export default Filter