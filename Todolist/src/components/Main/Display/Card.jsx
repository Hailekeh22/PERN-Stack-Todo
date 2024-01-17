import React from 'react';
import { FaRegTrashCan } from 'react-icons/fa6';
import { FaPenToSquare } from "react-icons/fa6";
import './Show.css'

function Card(props) {

  let value = props.value

  return (
    <div className='card'>
      <p>{value}</p>
      <div className='right-card'>
        <a onClick={() => props.editvalue(value)}><FaPenToSquare className='editicon' /></a>
        <a onClick={() => props.onDelete(value)}><FaRegTrashCan className='deleteicon'/></a>
      </div>
    </div>
  )
}

export default Card