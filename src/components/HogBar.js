import React from 'react'

function HogBar({ hogs, onClickTile }) {
  //console.log(hogs)
  return (
    <div className='pigBar'>
      {hogs.map(hog => 
        <div className='pigTile' key={hog.name} onClick={() => onClickTile(hog.name)}>
          <img src={hog.image} alt='hog' width='150' height='100'/>
          <h3>{hog.name}</h3>
        </div>
      )}
    </div>
  )
}

export default HogBar