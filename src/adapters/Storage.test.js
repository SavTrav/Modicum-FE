import Storage from './Storage'

describe('Storage', () => {
  afterEach(() => { localStorage.clear() })

  describe('default setup', () => {
    it('creates modicum object if it doesnt exist', () => {
      expect(localStorage.getItem('modicum')).toBeNull

      new Storage()

      const expected = JSON.stringify({ videos: [] })

      expect(localStorage.getItem('modicum')).toEqual(expected)
    })

    it('doesnt overwrite pre-existing', () => {
      const preExistingData = JSON.stringify({ videos: ['meow'] })
      localStorage.setItem('modicum', preExistingData)

      new Storage()

      const expected = JSON.stringify({ videos: ['meow'] })

      expect(localStorage.getItem('modicum')).toEqual(expected)
    })
  })

  describe('add', () => {
    it('adds item to localStorage', () => {
      const move = {
        startTime: '8.382',
        name: 'meow move',
        videoId: 'meow',
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
              },
            ],
          },
        ],
      }

      expect(output).toEqual(expected)
    })

    it('adds second move to existing video', () => {
      const move = {
        startTime: '8.382',
        name: 'meow move',
        videoId: 'meow',
      }
      const storage = new Storage()

      storage.addMove(move)

      const secondMove = {
        startTime: '3.333',
        name: 'second move',
        videoId: 'meow',
      }

      storage.addMove(secondMove)

      const actual = JSON.parse(localStorage.getItem('modicum'))
      const expected = {
        startTime: secondMove.startTime,
        name: secondMove.name,
      }

      expect(actual.videos.length).toEqual(1)
      expect(actual.videos[0].moves.length).toEqual(2)
      expect(actual.videos[0].moves[1]).toEqual(expected)
    })
  })
})
