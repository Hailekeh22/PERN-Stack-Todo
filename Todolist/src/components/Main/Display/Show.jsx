import React from 'react'
import './Show.css'
import Card from './Card'


function Show({value}) {

  

  return (
    <div>
      <div className='card-container'>
        {value.map((item,index) => {
          return <Card key={index} value={item} />
        })}
      </div>
    </div>
  )
}

export default Show