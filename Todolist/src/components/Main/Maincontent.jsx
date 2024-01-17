import React, { useState } from 'react';
import Input from './Input/Input';
import Show from './Display/Show';
import './main.css'


function Maincontent(props) {

  const [value, setValue] = useState([]);
  const [editValue,setEditValue] = useState("");



  function editvalue(val) {
    setEditValue(val);
    console.log(editValue + " from main")

  }

  function addValue(input) {
    
    if(input !== "" && !value.includes(input)) {
    setValue((prev) => [...prev, input]);
    } else {
      alert("Invalid Submit!!")
    }
  };

  function deletelist(removedvalue) {
    let newvalue = value.filter((val) => val !== removedvalue);
    setValue(newvalue);
  }


 
  
  return (
    <div className='mainbody'>
      <Input addValue={addValue} editValue={editValue}/>
      <Show value={value} editvalue={editvalue} onDelete={deletelist}/>
    </div>
  )
}

export default Maincontent