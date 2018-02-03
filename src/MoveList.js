import React from 'react'

const MoveList = ({moves, playMove}) => {
  return (
    <div>
      <h1>Moves</h1>
      <ul>
        { moves.map( move => <li onClick={ playMove(move.startTime, move.endTime) } >{`${move.name}, ${move.startTime}, ${move.endTime}`}</li>) }
      </ul>
    </div>
  )
}

export default MoveList
