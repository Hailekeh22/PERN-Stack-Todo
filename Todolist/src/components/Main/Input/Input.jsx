import React from 'react'
import './Input.css'


function Input() {
  return (
    <div className='inputbox'>
        <textarea className='inputarea' placeholder='Type here..'></textarea>
        <button className='submitbtn'>Add</button>
      
    </div>
  )
}

export default Input