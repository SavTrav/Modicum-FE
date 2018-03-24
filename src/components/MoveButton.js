import React from 'react'
import PropTypes from 'prop-types'

const MoveButton = ({ firstTimeAdded, onClick }) => {
  const backgroundColor = firstTimeAdded ? 'red' : 'green'
  const buttonText = firstTimeAdded ? 'End Move' : 'Start Move'

  return (
    <button onClick={onClick} style={{ backgroundColor }}>{buttonText}</button>
  )
}

MoveButton.propTypes = {
  firstTimeAdded: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default MoveButton
