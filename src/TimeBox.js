import React from 'react'

const TimeBox = ({times}) => {
  return (
    <div>{ times.map( time => <p>{ time }</p> ) }</div>
  )
}

export default TimeBox
