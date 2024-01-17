import React from 'react'
import './Show.css'
import Card from './Card'


function Show(props) {



  return (
    <div>
      <div className='card-container'>
        {props.value.map((item,index) => {
          return <Card key={index} editvalue={props.editvalue} onDelete={props.onDelete} value={item} />
        })}
      </div>
    </div>
  )
}

export default Show