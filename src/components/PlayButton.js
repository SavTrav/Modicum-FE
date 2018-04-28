import React from 'react'
import PropTypes from 'prop-types'

const PlayButton = ({ playTargetedMove, children }) => <button onClick={playTargetedMove}>{children}</button>

PlayButton.propTypes = {
  playTargetedMove: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
}

export default PlayButton
