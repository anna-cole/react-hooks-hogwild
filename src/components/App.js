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
	// display hog details when clicking on the tile

	const filteredArr = hogArr.filter(hog => {
    if (selectedGrease === 'All') {return true} 
		if (selectedGrease === "Greased") {return hog.greased === true} 
		else {return hog.greased === false}
  })
	// filter hogs by greased or not greased and display in the hogBar
	
	filteredArr.sort((hog, hog2) => {
		if (selectedSort === 'All') {return true}
		// will display all hogs in the bar when 'sort by' is selected
		if (selectedSort === 'Weight') {return hog.weight - hog2.weight}
		// will sort by weight if Weight is selected. Use the logic for sorting array of objects when value is a number.
		else {
			let hogLower = hog.name.toLowerCase();
			let hog2Lower = hog2.name.toLowerCase();
			if (hogLower < hog2Lower) {return -1;}
			if (hogLower > hog2Lower) {return 1;}
			return 0;
		}
		// will sort by name if the other 2 options are not selected. Use the logic for sorting array of objects when value is a string.
	})

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

