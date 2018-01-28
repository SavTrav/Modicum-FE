import React from 'react'

const TimeBox = ({ times, moves }) => {
  return (
    <div>
      <h1>Times</h1>
      <div>{times.map(time => <p>{time}</p>)}</div>
      <h1>Moves</h1>
      <div>{moves.map(move => <p>{`Name: ${move.name} - Start: ${move.startTime} - End: ${move.endTime}`}</p>)}</div>
    </div>
  )
}

export default TimeBox
