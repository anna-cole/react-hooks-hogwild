import React from 'react'

function HogDetails({ hogs }) {
  return (
    <div>
      {hogs.map(hog => {
        return (
        <ul key={hog.name}>
          <li>{`Name: ${hog.name}`}</li>
          <li>{`Specialty: ${hog.specialty}`}</li>
          <li>{`Greased: ${hog.greased ? 'yes' : 'no'}`}</li>
          <li>{`Weight: ${hog.weight} lbs`}</li>
          <li className='achievementText'>{`Highest medal achieved: ${hog['highest medal achieved']}`}</li>
        </ul>
        )
      })}
    </div>
  )
}

export default HogDetails