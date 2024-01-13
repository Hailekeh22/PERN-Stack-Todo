import React, { useState } from 'react'
import './Input.css'

function Input({ addValue }) {

  
  const [input, setinput] = useState("");


  function handlechange(e) {
    const txt = e.target.value;
    setinput(txt);

  }

  function handleclick() {
    addValue(input);
    setinput("");
    
  }



  return (
    <div className='inputbox'>
      <textarea 
      onChange={handlechange} 
      value={input} 
      className='inputarea' 
      placeholder='Type here..'></textarea>

      <button 
      onClick={handleclick} 
      className='submitbtn'>Add</button>

    </div>
  )
}



export default Input ;


