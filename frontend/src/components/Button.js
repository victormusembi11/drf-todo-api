import React from 'react'

const Button = ({ color, text, onAdd }) => {
  return (
    <button className='btn' style={{ backgroundColor: color }} onClick={onAdd} >{text}</button>
  )
}

export default Button