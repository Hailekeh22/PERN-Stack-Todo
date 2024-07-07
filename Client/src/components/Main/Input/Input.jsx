import React, { useEffect, useState } from 'react'
import './Input.css'

function Input(props) {

  
  const [input, setinput] = useState("");
  const [isEditing, setIsEditing] = useState(false);



  useEffect(() => {
    setinput(props.editValue);
    setIsEditing(!!props.editValue);
  }, [props.editValue]);


  function handlechange(e) {
    const txt = e.target.value;
    setinput(txt);

  }

  



  function handleClick() {
    if (isEditing) {
      props.editValue(input);
      setIsEditing(false);
    } else {
      props.addValue(input);
    }
    setinput('');
  }



  return (
    <div className='inputbox'>
      <textarea 
      onChange={handlechange} 
      value={input} 
      className='inputarea' 
      placeholder='Type here..'></textarea>

      <button 
        onClick={handleClick} 
      className='submitbtn'>Add</button>

    </div>
  )
}



export default Input ;


