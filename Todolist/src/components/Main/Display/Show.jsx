import React from 'react'
import './Show.css'
import Card from './Card'

function Show() {
  return (
    <div>
      <div className='card-container'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Show