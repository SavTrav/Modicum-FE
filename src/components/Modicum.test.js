import React from 'react'
import { shallow } from 'enzyme'
import Modicum from './Modicum'

describe('Modicum', () => {
  describe('addingASecondTime', () => {
    it('returns true if the current number of times in the list is 1', () => {
      const wrapper = shallow(<Modicum />)
      wrapper.setState({ times: ['firsttime'] })
      const result = wrapper.instance().addingASecondTime()

      expect(result).toBe(true)
    })
  })

  describe('thereAreTwoTimes', () => {
    it('returns true if the current number of times in the list is 2', () => {
      const wrapper = shallow(<Modicum />)
      wrapper.setState({ times: ['firsttime', 'secondtime'] })
      const result = wrapper.instance().thereAreTwoTimes()

      expect(result).toBe(true)
    })
  })
})
