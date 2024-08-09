
import React from 'react'
import './index.css'

const DestinationItem = ({destination}) => {
  const {name, imgUrl} = destination
  return (
    <li className="destination-item">
      <img src={imgUrl} alt={name} className="destination-image" />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem