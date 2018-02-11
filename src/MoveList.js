import React from 'react'

const MoveList = ({ moves, targetMove }) => {
  return (
    <div>
      <h1>Moves</h1>
      <ul>
        {moves.map(move =>
          <li onClick={() => { targetMove(move) }} >{`${move.name}, ${move.startTime}, ${move.endTime}`}</li>
        )}
      </ul>
    </div>
  )
}

export default MoveList
