import React from 'react'

const Button = ({ text, onAdd }) => {
  return (
    <button className='btn btn-success' onClick={onAdd} >{text}</button>
  )
}

export default Button