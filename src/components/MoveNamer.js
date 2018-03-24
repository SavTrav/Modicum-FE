import React from 'react'

const MoveNamer = ({ display, onSubmit }) => {
  if (display) {
    return (
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Name your move" />
        <input type="submit" />
      </form>
    )
  } else {
    return null
  }
}

export default MoveNamer