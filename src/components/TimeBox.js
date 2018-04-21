import React from 'react'
import styled, { css } from 'react-emotion'

const TimeBoxContainer = styled('div')`
  grid-column-start: 2;
  grid-column-end: 3;
`

const TimeBox = ({ times }) => {
  return (
    <TimeBoxContainer>
      <h1>Times</h1>
      <div>{times.map(time => <p>{time}</p>)}</div>
    </TimeBoxContainer>
  )
}

export default TimeBox
