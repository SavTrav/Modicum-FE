import React from 'react'
import PropTypes from 'prop-types'

const TimeBox = ({ times }) => (
  <div>
    <h1>Times</h1>
    <div>{times.map(time => <p>{time}</p>)}</div>
  </div>
)

TimeBox.propTypes = {
  times: PropTypes.array
}

export default TimeBox
