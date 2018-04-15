import React, { Component } from 'react'
import YouTube from 'react-youtube'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import styled, { css } from 'react-emotion'

import './Modicum.css'
import TimeBox from './TimeBox'
import MoveButton from './MoveButton'
import MoveNamer from './MoveNamer'
import MoveList from './MoveList'
import PlayButton from './PlayButton'
import AppContainer from './AppContainer'

import VideoPlayer from '../adapters/VideoPlayer'
import Storage from '../adapters/Storage'

var VIDEO_PLAYER = new VideoPlayer()

const ButtonContainer = styled('div')`
`

class Modicum extends Component {

  constructor(props) {
    super(props)

    this.state = {
      times: [],
      moves: [],
      targetedMove: {},
      videoId: ''
    }
  }

  componentDidMount() {
    
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
    const move = {
      startTime: this.state.times[0],
      name: e.target.children[0].value,
      videoId: this.state.videoId
    }

    this.setState({moves: [...this.state.moves, move], times: []})
  }

  targetMove = (targetedMove) => {
    if (targetedMove.videoId !== this.state.videoId) {
      this.setState({ videoId: targetedMove.videoId})
    }

    this.setState({ targetedMove })
  }

  addingASecondTime = () => {
    return this.state.times.length === 1
  }

  thereAreTwoTimes = () => {
    return this.state.times.length === 2
  }

  playMove = () => {
    VIDEO_PLAYER.playMove(this.state.targetedMove.startTime)
  }

  playMoveSlow = () => {
    VIDEO_PLAYER.playMoveSlow(this.state.targetedMove.startTime)
  }

  setVideoId = (e) => {
    e.preventDefault()
    const id = e.target.children[0].value.split('=')[1]

    this.setState({ videoId: id, targetedMove: {} })
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
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <AppBar title='Modicum' />
        <AppContainer>
          <div>
            <YouTube
              videoId={this.state.videoId}
              opts={opts}
              onReady={  VIDEO_PLAYER.onReady }
            />
          </div>

          <ButtonContainer>
            <MoveButton firstTimeAdded={this.state.times.length > 0} onClick={this.addTime} />
            <PlayButton playTargetedMove={this.playMove}>Play</PlayButton>
            <PlayButton playTargetedMove={this.playMoveSlow}>Play Slow</PlayButton>
          </ButtonContainer>
          <MoveNamer display={this.thereAreTwoTimes()} onSubmit={this.addMove} />
          <TimeBox times={this.state.times} />
          <MoveList
            moves={this.state.moves}
            targetMove={this.targetMove}
            targetedMove={this.state.targetedMove}
          />
          <form onSubmit={this.setVideoId}>
            <input name='videoInput' type='text' placeholder='Video Url' />
          </form>
        </AppContainer>
      </MuiThemeProvider>
    )
  }
}

export default Modicum
