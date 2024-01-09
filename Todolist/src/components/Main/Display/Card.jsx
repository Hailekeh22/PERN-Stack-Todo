import React from 'react'
import './Show.css'

function Card(props) {
  return (
    <div className='card'>
        <p>{props.content}</p>
        <button className='deletebtn'>Delete</button>
    </div>
  )
}

export default Card