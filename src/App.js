import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import YouTube from 'react-youtube'
import TimeBox from './TimeBox'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      times: [],
    }
  }

  _onReady = (e) => {
    this.setState({
      player: e.target,
    })
  }

  addTime = () => {
    this.setState({
      times: [ ...this.state.times, this.state.player.getCurrentTime() ]
    })

    console.log(this.state.times)
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

    // can do anything here, function body
    // performance concerns over render being invoked lots
    // return is single exit

    return (
      <div className="player">

        <YouTube
          videoId="9hZQzNw5uiA"
          opts={opts}
          onReady={this._onReady}
        />

        <button id='gimmetime'>console log times!</button>
        <button id='addtime' onClick={this.addTime}>add time to the array</button>
        <button id='playmove'>play the move</button>
        <button id='playmoveslow'>play the move but slow!</button>
        
        <TimeBox times={this.state.times}/>
      </div>
    )
  }
}

export default App
