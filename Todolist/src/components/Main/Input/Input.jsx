import React, { useEffect, useState } from 'react'
import './Input.css'

function Input(props) {

  
  const [input, setinput] = useState("");



  useEffect(() => {
    setinput(props.editValue);
  }, [props.editValue]);


  function handlechange(e) {
    const txt = e.target.value;
    setinput(txt);

  }



  function handleclick() {
    props.addValue(input);
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


