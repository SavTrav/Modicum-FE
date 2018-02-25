import React from 'react'
import { shallow } from 'enzyme'
import MoveButton from './MoveButton'

describe('MoveButton', () => {
  const defaultProps = {
    firstTimeAdded: false,
    onClick: () => {},
  }

  it('renders without crashing', () => {
    const wrapper = shallow(<MoveButton {...defaultProps}/>)

    expect(wrapper.length).toEqual(1)
  })

  it('is green and says Start Move if a move is not being recorded', () => {
    const wrapper = shallow(<MoveButton {...defaultProps} firstTimeAdded={false} />)
    const button = wrapper.find('button').props()

    expect(button.style).toEqual({ backgroundColor: 'green' })
    expect(button.children).toEqual('Start Move')
  })

  it('is red and says End Move if a move is being recorded', () => {
    const wrapper = shallow(<MoveButton {...defaultProps} firstTimeAdded={true} />)
    const button = wrapper.find('button').props()

    expect(button.style).toEqual({ backgroundColor: 'red' })
    expect(button.children).toEqual('End Move')
  })

  it('fires onClick when the button is clicked', () => {
    const mockFn = jest.fn()
    const wrapper = shallow(<MoveButton {...defaultProps} onClick={mockFn} />)

    wrapper.simulate('click')
    expect(mockFn).toHaveBeenCalled()
  })
})
