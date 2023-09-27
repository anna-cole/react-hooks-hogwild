import React, { useState } from "react";
import Nav from "./Nav";
import HogBar from "./HogBar";
import Filter from "./Filter"
import HogDetails from "./HogDetails";
import hogs from "../porkers_data";

function App() {
	const [hogArr, setHogs] = useState(hogs)
	const [name, setName] = useState('')
	const [selectedGrease, setSelectedGrease] = useState('All');

	const itemsToDisplay = hogArr.filter(hog => {
    if (selectedGrease === 'All') {
      return true
    } else if (selectedGrease === "Greased") {
      return hog.greased === true
    } else if (selectedGrease === "Not greased") {
			return hog.greased === false
		}
  })

	function handleGreaseChange(event) {
    setSelectedGrease(event.target.value);
  }

	function renderDetails(name) {
		setName(name)
	}

  const detailsArr = hogArr.filter(hog => hog.name === name)

	return (
		<div className="App">
			<Nav/>
			<HogBar hogs={itemsToDisplay} onClickTile={renderDetails}/>
			<Filter onGreaseChange={handleGreaseChange} selectedGrease={selectedGrease}/>
			<HogDetails detailsArr={detailsArr}/>
		</div>
	);
}

export default App;

