import React from 'react'
import './Show.css'

function Card(props) {

  let value = props.value

  return (
    <div className='card'>
      <p>{value}</p>
      <button className='deletebtn' onClick={() => props.onDelete(value)}>Delete</button>
    </div>
  )
}

export default Card