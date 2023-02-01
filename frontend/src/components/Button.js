import React from 'react'

const Button = ({ text, onAdd, showAdd }) => {
  return (
    <button className={showAdd ? 'btn btn-danger' : 'btn btn-success'} onClick={onAdd} >{text}</button>
  )
}

export default Button