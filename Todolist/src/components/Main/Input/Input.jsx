import React from 'react'


function Input() {
  return (
    <div className='inputbox'>
      <textarea placeholder='Write something here..'></textarea>
      <div>
        <button>Add</button>
      </div>
    </div>
  )
}

export default Input