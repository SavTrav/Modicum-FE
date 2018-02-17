import React from 'react'

const MoveList = ({ moves, targetMove, targetedMove }) => {
  const activeStyle = (name) => {
    return name === targetedMove.name ? { backgroundColor: 'tomato' } : {}
  }
  return (
    <div>
      <h1>Moves</h1>
      <ul>
        {moves.map(move =>
          <li style={activeStyle(move.name)} onClick={() => { targetMove(move) }} >{`Name: ${move.name}, Start time: ${move.startTime}, Video Id: ${move.videoId}`}</li>
        )}
      </ul>
    </div>
  )
}

export default MoveList
