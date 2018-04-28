import React from 'react'
import PropTypes from 'prop-types'

const VideoList = ({ videos, targetMove, targetedMove }) => {
  const activeStyle = (name) => {
    return name === targetedMove.name ? { backgroundColor: 'tomato' } : {}
  }

  return (
    <div>
      <h1>Videos</h1>
      <ul>
        {videos.map((video, idx) =>
          <li key={`${video.name}${idx}`}>
            {video.name}
            <ul>
              {
                video.moves.map((move, idx) => (
                  <li
                    style={activeStyle(move.name)}
                    className='moves'
                    key={`${move.name}${idx}`}
                    onClick={() => { targetMove(video.id, move) }}>
                    {`Name: ${move.name} - startTime: ${move.startTime}`}
                  </li>
                ))
              }
            </ul>
          </li>
        )}
      </ul>
    </div>
  )
}

VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  targetMove: PropTypes.func.isRequired,
  targetedMove: PropTypes.shape().isRequired,
}

export default VideoList
// <li key={`${video.name}${idx}`} style={activeStyle(video.name)} onClick={() => { targetMove(video) }} >{`Name: ${video.name}, Start time: ${video.startTime}, Video Id: ${video.videoId}`}</li>

// {
//   videos: [
//     {
//       name: 'Terry, King of Dance'
//       id: abc123,
//       moves: [
//         {
//           startTime: 12345,
//           name: He spin real good
//         }
//       ]
//     }
//   ]
// }
