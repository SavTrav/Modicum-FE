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

  addMove(video, move) {
    const store = this.getStore()
    const videoIndex = findVideoIndex(store, video.id)

    if (videoIndex >= 0) {
      store.videos[videoIndex].moves.push({
        startTime: move.startTime,
        name: move.name,
      })
    } else {
      const newVideo = {
        id: video.id,
        name: video.name,
        moves: [
          {
            startTime: move.startTime,
            name: move.name,
          },
        ],
      }

      store.videos.push(newVideo)
    }

    this.setStore(store)
    return store.videos
  }
}

export default Storage
