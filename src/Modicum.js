import React, { Component } from 'react'
import './Modicum.css'
import YouTube from 'react-youtube'
import TimeBox from './TimeBox'
import MoveButton from './MoveButton'
import MoveNamer from './MoveNamer'
import MoveList from './MoveList'
import VideoPlayer from './VideoPlayer'
import PlayButton from './PlayButton'

var VIDEO_PLAYER = new VideoPlayer()

class Modicum extends Component {

  constructor(props) {
    super(props)

    this.state = {
      times: [],
      moves: [],
      targetedMove: null,
    }
  }

  addTime = () => {
    if (this.addingASecondTime()) {
      VIDEO_PLAYER.pauseVideo()
    }
    this.setState({
      times: [...this.state.times, VIDEO_PLAYER.getCurrentTime()]
    })
  }

  addMove = (e) => {
    e.preventDefault()
    const move = {startTime: this.state.times[0], endTime: this.state.times[1], name: e.target.children[0].value}
    this.setState({moves: [...this.state.moves, move], times: []})
  }

  targetMove = (targetedMove) => {
    VIDEO_PLAYER.pauseAndSeek(targetedMove.startTime)
    this.setState({targetedMove})
  }

  addingASecondTime = () => {
    return this.state.times.length === 1
  }

  thereAreTwoTimes = () => {
    return this.state.times.length === 2
  }

  playMove = () => {
    VIDEO_PLAYER.playMove(this.state.targetedMove.startTime, this.state.targetedMove.endTime)
  }

  playMoveSlow = () => {
    VIDEO_PLAYER.playMoveSlow(this.state.targetedMove.startTime, this.state.targetedMove.endTime)
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        rel: 0,
        controls: 0,
        modestbranding: 1,
        showinfo: 0,
      }
    }

    return (
      <div className="player">
        <div>
          <YouTube
            videoId="9hZQzNw5uiA"
            opts={opts}
            onReady={VIDEO_PLAYER.onReady}
          />
        </div>

        <MoveButton firstTimeAdded={this.state.times.length > 0} onClick={this.addTime} />
        <PlayButton playTargetedMove={this.playMove}>Play</PlayButton>
        <PlayButton playTargetedMove={this.playMoveSlow}>Play Slow</PlayButton>
        <MoveNamer display={this.thereAreTwoTimes()} onSubmit={this.addMove} />
        <TimeBox times={this.state.times} />
        <MoveList moves={this.state.moves} targetMove={this.targetMove} />
      </div>
    )
  }
}

export default Modicum
