import React from 'react'
import PropTypes from 'prop-types'

const MoveList = ({ moves, targetMove, targetedMove }) => {
  const activeStyle = (name) => {
    return name === targetedMove.name ? { backgroundColor: 'tomato' } : {}
  }

  return (
    <div>
      <h1>Moves</h1>
      <ul>
        {moves.map((move, idx) =>
          <li key={`${move.name}${idx}`} style={activeStyle(move.name)} onClick={() => { targetMove(move) }} >{`Name: ${move.name}, Start time: ${move.startTime}, Video Id: ${move.videoId}`}</li>
        )}
      </ul>
    </div>
  )
}

MoveList.propTypes = {
  moves: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  targetMove: PropTypes.func.isRequired,
  targetedMove: PropTypes.shape().isRequired,
}

export default MoveList
