import React, { useState } from 'react';
import Input from './Input/Input';
import Show from './Display/Show';
import './main.css'


function Maincontent() {

  const [value, setValue] = useState([]);

  function addValue(input) {
    setValue((prev) => [...prev, input]);
  };

  

  return (
    <div className='mainbody'>
      <Input addValue={addValue}/>
      <Show value={value}/>
    </div>
  )
}

export default Maincontent