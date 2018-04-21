import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'

const MoveListContainer = styled('div')`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  grid-row: 1/span all;
`

const MoveList = ({ moves, targetMove, targetedMove }) => {
  const activeStyle = (name) => {
    return name === targetedMove.name ? { backgroundColor: 'tomato' } : {}
  }

  return (
    <MoveListContainer>
      <h1>Moves</h1>
      <ul>
        {moves.map((move, idx) =>
          <li key={`${move.name}${idx}`} style={activeStyle(move.name)} onClick={() => { targetMove(move) }} >{`Name: ${move.name}, Start time: ${move.startTime}, Video Id: ${move.videoId}`}</li>
        )}
      </ul>
    </MoveListContainer>
  )
}

MoveList.propTypes = {
  moves: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  targetMove: PropTypes.func.isRequired,
  targetedMove: PropTypes.shape().isRequired,
}

export default MoveList
