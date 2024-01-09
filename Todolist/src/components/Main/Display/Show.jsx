import React, {useState} from 'react'
import './Show.css'
import Card from './Card'

function Show() {

  const [value, setvalue] = useState([]);

  return (
    <div>
      <div className='card-container'>
       {value.map((val) => {
        return <Card content = {val} />
       })}
      </div>
    </div>
  )
}

export default Show