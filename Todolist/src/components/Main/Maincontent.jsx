import React, { useState } from 'react';
import Input from './Input/Input';
import Show from './Display/Show';
import './main.css'


function Maincontent() {

  const [values, setValues] = useState([]);

  

  return (
    <div className='mainbody'>
      <Input />
      <Show />
    </div>
  )
}

export default Maincontent