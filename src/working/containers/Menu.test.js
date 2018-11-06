import React from 'react'
import Menu from './Menu'
import { shallow } from 'enzyme'
import * as user from '../lib/user'

describe('Menu', () => {
  let instance
  beforeEach(() => {
    instance = shallow(<Menu />).instance()
    user.isExistingUser = jest.fn().mockReturnValue('user.isExistingUser')
  })

  test('existingUser returns from isExistingUser', () => {
    expect(instance.existingUser()).toEqual('user.isExistingUser')
  })
})
