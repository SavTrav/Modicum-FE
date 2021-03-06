import React, { Component } from 'react'
import YouTube from 'react-youtube'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import styled, { css } from 'react-emotion'

import './Modicum.css'
import TimeBox from './TimeBox'
import MoveButton from './MoveButton'
import MoveNamer from './MoveNamer'
import VideoList from './VideoList'
import PlayButton from './PlayButton'
import AppContainer from './AppContainer'

import VideoPlayer from '../adapters/VideoPlayer'
import Storage from '../adapters/Storage'

const VIDEO_PLAYER = new VideoPlayer()
const storage = new Storage()

const ButtonContainer = styled('div') `
`

class Modicum extends Component {
  constructor(props) {
    super(props)
    this.state = {
      times: [],
      videos: storage.getStore().videos,
      targetedMove: {},
      videoId: '',
    }

    this.targetMove = this.targetMove.bind(this)
    this.addTime = this.addTime.bind(this)
    this.addMove = this.addMove.bind(this)
    this.addingASecondTime = this.addingASecondTime.bind(this)
    this.thereAreTwoTimes = this.thereAreTwoTimes.bind(this)
    this.playMove = this.playMove.bind(this)
    this.playMoveSlow = this.playMoveSlow.bind(this)
    this.setVideoId = this.setVideoId.bind(this)
  }

  setVideoId(e) {
    e.preventDefault()
    const id = e.target.children[0].value.split('=')[1]

    this.setState({ videoId: id, targetedMove: {} })
  }

  targetMove(videoId, targetedMove) {
    if (videoId !== this.state.videoId) {
      this.setState({ videoId })
    }

    this.setState({ targetedMove })
  }

  addingASecondTime() {
    return this.state.times.length === 1
  }

  thereAreTwoTimes() {
    return this.state.times.length === 2
  }

  playMove() {
    VIDEO_PLAYER.playMove(this.state.targetedMove.startTime)
  }

  playMoveSlow() {
    VIDEO_PLAYER.playMoveSlow(this.state.targetedMove.startTime)
  }

  addMove(e) {
    e.preventDefault()
    const video = { id: this.state.videoId, name: VIDEO_PLAYER.getVideoData().title }
    const move = {
      startTime: this.state.times[0],
      name: e.target.children[0].value,
    }

    const videos = storage.addMove(video, move)
    this.setState({ videos, times: [] })
  }

  addTime() {
    if (this.addingASecondTime()) {
      VIDEO_PLAYER.pauseVideo()
    }
    this.setState({
      times: [...this.state.times, VIDEO_PLAYER.getCurrentTime()]
    })
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
      },
    }

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <AppBar title="Modicum" />
          <AppContainer>
            <div>
              <YouTube
                videoId={this.state.videoId}
                opts={opts}
                onReady={VIDEO_PLAYER.onReady}
              />
            </div>

            <ButtonContainer>
              <MoveButton firstTimeAdded={this.state.times.length > 0} onClick={this.addTime} />
              <PlayButton playTargetedMove={this.playMove}>Play</PlayButton>
              <PlayButton playTargetedMove={this.playMoveSlow}>Play Slow</PlayButton>
            </ButtonContainer>
            <MoveNamer display={this.thereAreTwoTimes()} onSubmit={this.addMove} />
            <TimeBox times={this.state.times} />
            <VideoList
              videos={this.state.videos}
              targetMove={this.targetMove}
              targetedMove={this.state.targetedMove}
            />
            <form onSubmit={this.setVideoId}>
              <input name="videoInput" type="text" placeholder="Video Url" />
            </form>
          </AppContainer>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Modicum
