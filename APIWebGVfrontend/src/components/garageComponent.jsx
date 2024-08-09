import React from 'react'
import "../styles/garageComponentStyle.css"
const GarageComponent = ({garage}) => {
  return (
    <div className='garageContainer'> 
        <div>nom : {garage.nom}</div>
        <div>emplacement : {garage.emplacement}</div>
    </div>
  )
}

export default GarageComponent