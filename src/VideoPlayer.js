class VideoPlayer {
  constructor() {
    this.player = null
  }

  getCurrentTime = () => this.player.getCurrentTime()

  onReady = (e) => {
    this.player = e.target
  }

  pauseVideo = () => {
    console.log('calling pause')
    this.player.pauseVideo()
  }

  playMove = (startTime) => {
    this.setIframePlaybackRate(1)
    this.pauseAndSeek(startTime)
    this.player.playVideo()
  }

  pauseAndSeek = (startTime) => {
    this.player.pauseVideo()
    this.player.seekTo(startTime)
  }

  setIframePlaybackRate = (playbackRate) => {
    const data = { event: 'command', func: 'setPlaybackRate', args: [playbackRate, true] }
    const message = JSON.stringify(data)
    const iframe = this.player.getIframe()
    iframe.contentWindow.postMessage(message, '*')
  }

  playMoveSlow = (startTime) => {
    this.player.pauseVideo()
    this.player.seekTo(startTime)
    this.player.playVideo()
    this.setIframePlaybackRate(0.5)
  }
}

export default VideoPlayer
