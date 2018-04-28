import React from 'react'
import PropTypes from 'prop-types'

const MoveNamer = ({ display, onSubmit }) => {
  if (display) {
    return (
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Name your move" />
        <input type="submit" />
      </form>
    )
  }
  return null
}

MoveNamer.propTypes = {
  display: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default MoveNamer
