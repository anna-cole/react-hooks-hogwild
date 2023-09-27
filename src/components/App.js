import React, { useState } from "react";
import Nav from "./Nav";
import HogBar from "./HogBar";
import Filter from "./Filter"
import HogDetails from "./HogDetails";
import hogs from "../porkers_data";

function App() {
	const [hogArr, setHogs] = useState(hogs) // hog array
	const [name, setName] = useState('') // hog names
	const [selectedGrease, setSelectedGrease] = useState('All');  // greased, not greased
	const [selectedSort, setSelectedSort] = useState('All') // weight, name

	function handleClick(name) {
		setName(name)
	}

	function handleFilter(event) {
    setSelectedGrease(event.target.value);
  }

	function handleSort(event) {
    setSelectedSort(event.target.value);
  }

  const detailsArr = hogArr.filter(hog => hog.name === name)

	const filteredArr = hogArr.filter(hog => {
    if (selectedGrease === 'All') {
      return true
    } else if (selectedGrease === "Greased") {
      return hog.greased === true
    } else if (selectedGrease === "Not greased") {
			return hog.greased === false
		}
  })

	const copyFilteredArr = [...filteredArr]

	const sortedByWeightArr = copyWeight.sort((a, b) => {
		if (a.weight < b.weight) {
			return -1
		}
		if (a.weight > b.weight) {
			return 1
		}
		return 0
	})

	const sortedByNameArr = copyName.sort((a, b) => {
		const nameA = a.name.toLowerCase()
		const nameB = b.name.toLowerCase()
		if (nameA < nameB) {
			return -1
		}
		if (nameA > nameB) {
			return 1
		}
		return 0
	})
	
	const arrName = copyName.filter(hog => {
    if (selectedSort === 'All') {
      return true
    } if (selectedSort === "Name") {
      return sortedByNameArr
    } 
  })

	const arrWeight = copyWeight.filter(hog => {
    if (selectedSort === 'All') {
      return true
    } if (selectedSort === "Weight") {
      return sortedByWeightArr
    } 
  })

console.log(arrWeight)

	return (
		<div className="App">
			<Nav/>
			<HogBar hogs={filteredArr} onClickTile={handleClick}/>
			<Filter selectedGrease={selectedGrease} onChangeFilter={handleFilter} selectedSort={selectedSort} onChangeSort={handleSort}/>
			<HogDetails hogs={detailsArr}/>
		</div>
	);
}

export default App;

