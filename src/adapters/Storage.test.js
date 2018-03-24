import Storage from './Storage'

describe('Storage', () => {
  describe('default setup', () => {
    it('creates modicum object if it doesnt exist')
    it('doesnt overwrite pre-existing')
  })

  describe('add', () => {
    it('adds item to localStorage', () => {
      const move = {
        startTime: '8.382',
        name: 'meow move',
        videoId: 'meow'
      }
      const storage = new Storage()

      storage.addMove(move)

      const output = JSON.parse(localStorage.getItem('modicum'))

      const expected = {
        videos: [
          {
            id: move.videoId,
            moves: [
              {
                startTime: move.startTime,
                name: move.name,
                videoId: move.videoId
              } 
            ]
          }
        ]
      }

      expect(output).toEqual(expected)
    })
  })

  it('adds second move to existing video')
})
