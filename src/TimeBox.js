import React from 'react'

const TimeBox = ({ times }) => {
  return (
    <div>
      <h1>Times</h1>
      <div>{times.map(time => <p>{time}</p>)}</div>
    </div>
  )
}

export default TimeBox
