import React from 'react'

function HogDetails({ detailsArr }) {
  return (
    <div>
      {detailsArr.map(hogDetails => {
        return (
        <ul key={hogDetails.name}>
          <li>{`Name: ${hogDetails.name}`}</li>
          <li>{`Specialty: ${hogDetails.specialty}`}</li>
          <li>{`Greased: ${hogDetails.greased ? 'yes' : 'no'}`}</li>
          <li>{`Weight: ${hogDetails.weight} lbs`}</li>
          <li className='achievementText'>{`Highest medal achieved: ${hogDetails['highest medal achieved']}`}</li>
        </ul>
        )
      })}
    </div>
  )
}

export default HogDetails