import React from 'react'
import Alerter from './Alerter'
import { shallow } from 'enzyme'

describe('Alerter', () => {
  let instance
  beforeEach(() => {
    instance = shallow(<Alerter />).instance()
  })

  test('unboundMethod returns 123', () => {
    expect(instance.unboundMethod()).toEqual(123)
  })
})
