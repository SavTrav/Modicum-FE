import React from 'react'
import { shallow } from 'enzyme'
import VideoList from './VideoList'

describe('VideoList', () => {
  const moves = [
    { startTime: 'time1', name: 'twirly' },
    { startTime: 'time2', name: 'spinny' },
  ]

  const defaultProps = {
    videos: [
      {
        id: '123',
        name: 'fancyterry',
        moves: moves,
      }
    ],
    targetedMove: { name: 'twirly' },
    targetMove: () => {},
  }

  it('renders an entire list of moves that is passed in', () => {
    const wrapper = shallow(<VideoList {...defaultProps} />)
    const texts = wrapper.find('.moves').map(node => node.text())

    expect(texts).toEqual(['Name: twirly - startTime: time1', 'Name: spinny - startTime: time2'])
  })

  it('highlights the active move with a pretty color', () => {
    const wrapper = shallow(<VideoList {...defaultProps} />)
    const styles = wrapper.find('.moves').map(node => node.props().style)

    expect(styles[0]).toEqual({ backgroundColor: 'tomato' })
    expect(styles[1]).toEqual({})
  })

  it('fires targetMove when the move list item is clicked', () => {
    const mockFn = jest.fn()
    const wrapper = shallow(<VideoList {...defaultProps} targetMove={mockFn} />)

    wrapper.find('.moves').first().simulate('click')

    expect(mockFn).toHaveBeenCalledWith('123', { startTime: 'time1', name: 'twirly' })
  })
})
