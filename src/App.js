import React, { Component } from 'react'
import './App.css'
import YouTube from 'react-youtube'
import TimeBox from './TimeBox'
import MoveButton from './MoveButton'
import MoveNamer from './MoveNamer'

var IFRAME_PLAYER

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      times: [],
      moves: [],
    }
  }

  _onReady = (e) => {
    IFRAME_PLAYER = e.target
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
            onReady={this._onReady}
          />
        </div>

        <MoveButton firstTimeAdded={this.state.times.length > 0} onClick={this.addTime} />
        <MoveNamer display={this.thereAreTwoTimes()} onSubmit={this.addMove} />
        <TimeBox times={this.state.times} moves={this.state.moves} />
      </div>
    )
  }
}

export default App
