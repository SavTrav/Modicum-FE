import React from 'react'
import { shallow } from 'enzyme'
import VideoList from './VideoList'

describe('VideoList', () => {
  const moves = [
    { startTime: 'time1', name: 'twirly', videoId: 'abc123' },
    { startTime: 'time2', name: 'spinny', videoId: 'xyz456' },
  ]

  const defaultProps = {
    targetedMove: { name: 'twirly' },
    targetMove: () => {},
    moves,
  }

  it('renders an entire list of moves that is passed in', () => {
    const wrapper = shallow(<VideoList {...defaultProps} />)
    const texts = wrapper.find('li').map(node => node.text())

    expect(texts).toEqual(['Name: twirly, Start time: time1, Video Id: abc123', 'Name: spinny, Start time: time2, Video Id: xyz456'])
  })

  it('highlights the active move with a pretty color', () => {
    const wrapper = shallow(<VideoList {...defaultProps} />)
    const styles = wrapper.find('li').map(node => node.props().style)

    expect(styles[0]).toEqual({ backgroundColor: 'tomato' })
    expect(styles[1]).toEqual({})
  })

  it('fires targetMove when the move list item is clicked', () => {
    const mockFn = jest.fn()
    const wrapper = shallow(<VideoList {...defaultProps} targetMove={mockFn} />)

    wrapper.find('li').first().simulate('click')

    expect(mockFn).toHaveBeenCalledWith({ startTime: 'time1', name: 'twirly', videoId: 'abc123' })
  })
})