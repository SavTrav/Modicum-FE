import React from 'react'

const PlayButton = ({ playTargetedMove, children }) => {
  return <button onClick={playTargetedMove}>{children}</button>
}

export default PlayButton