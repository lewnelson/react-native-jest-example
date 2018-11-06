import React from 'react'
import Something from './Something'
import { shallow } from 'enzyme'

describe('Something', () => {
  let instance
  beforeEach(() => {
    instance = shallow(<Something />).instance()
  })

  test('myMethod returns 456', () => {
    expect(instance.myMethod()).toEqual(456)
  })
})
