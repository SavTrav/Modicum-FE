const findVideoIndex = (store, id) => store.videos.findIndex(video => video.id === id)

class Storage {
  constructor() {
    this.namespace = 'modicum'
    this.initModicum()
  }

  getStore() {
    return JSON.parse(localStorage.getItem(this.namespace))
  }

  setStore(data) {
    localStorage.setItem(this.namespace, JSON.stringify(data))
  }

  initModicum() {
    const defaultSetup = JSON.stringify({ videos: [] })
    localStorage.getItem(this.namespace) || localStorage.setItem(this.namespace, defaultSetup)
  }

  addMove(move) {
    const store = this.getStore()
    const videoIndex = findVideoIndex(store, move.videoId)

    if (videoIndex >= 0) {
      store.videos[videoIndex].moves.push({
        startTime: move.startTime,
        name: move.name
      })
    } else {
      const formattedMove = {
        id: move.videoId,
        moves: [
          {
            startTime: move.startTime,
            name: move.name
          }
        ]
      }

      store.videos.push(formattedMove)
    }

    this.setStore(store)
  }

}

export default Storage
