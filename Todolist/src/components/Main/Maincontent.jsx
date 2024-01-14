import React, { useState } from 'react';
import Input from './Input/Input';
import Show from './Display/Show';
import './main.css'


function Maincontent() {

  const [value, setValue] = useState([]);

  function addValue(input) {
    setValue((prev) => [...prev, input]);
  };

  function deletelist(removedvalue) {
    let newvalue = value.filter((val) => val !== removedvalue);
    setValue(newvalue);
    //console.log("Delete Button Clicked!");
  }
  

  return (
    <div className='mainbody'>
      <Input addValue={addValue}/>
      <Show value={value} onDelete={deletelist}/>
    </div>
  )
}

export default Maincontent