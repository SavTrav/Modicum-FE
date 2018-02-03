import React, { Component } from 'react'
import './Modicum.css'
import YouTube from 'react-youtube'
import TimeBox from './TimeBox'
import MoveButton from './MoveButton'
import MoveNamer from './MoveNamer'
import MoveList from './MoveList'

var IFRAME_PLAYER

const _onReady = (e) => {
  IFRAME_PLAYER = e.target
}

const pauseVideo = () => {
  console.log('calling pause')
  IFRAME_PLAYER.pauseVideo()
}

const playMove = (startTime, endTime) => {
  const duration = Math.round((endTime - startTime) * 1000)

  return () => {
    IFRAME_PLAYER.pauseVideo()
    IFRAME_PLAYER.seekTo(startTime)
    IFRAME_PLAYER.playVideo()
    setTimeout(pauseVideo, duration)
  }
}


class Modicum extends Component {

  constructor(props) {
    super(props)

    this.state = {
      times: [],
      moves: [],
    }
  }

  addTime = () => {
    if (this.addingASecondTime()) {
      IFRAME_PLAYER.pauseVideo()
    }
    this.setState({
      times: [...this.state.times, IFRAME_PLAYER.getCurrentTime()]
    })
  }

  addMove = (e) => {
    e.preventDefault()
    const move = {startTime: this.state.times[0], endTime: this.state.times[1], name: e.target.children[0].value}
    this.setState({moves: [...this.state.moves, move], times: []})
  }

  addingASecondTime = () => {
    return this.state.times.length === 1
  }

  thereAreTwoTimes = () => {
    return this.state.times.length === 2
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
            onReady={_onReady}
          />
        </div>

        <MoveButton firstTimeAdded={this.state.times.length > 0} onClick={this.addTime} />
        <MoveNamer display={this.thereAreTwoTimes()} onSubmit={this.addMove} />
        <TimeBox times={this.state.times} />
        <MoveList moves={this.state.moves} playMove={playMove} />
      </div>
    )
  }
}

export default Modicum
