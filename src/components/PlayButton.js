import React from 'react'

const PlayButton = ({ playTargetedMove, children }) => <button onClick={playTargetedMove}>{children}</button>

export default PlayButton
