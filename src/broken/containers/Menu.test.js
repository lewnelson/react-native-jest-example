import React from 'react'
import Menu from './Menu'
import { shallow } from 'enzyme'
import * as lib from '../lib'

describe('Menu', () => {
  let instance
  beforeEach(() => {
    instance = shallow(<Menu />).instance()
    lib.isExistingUser = jest.fn().mockReturnValue('lib.isExistingUser')
  })

  test('existingUser returns from isExistingUser', () => {
    expect(instance.existingUser()).toEqual('lib.isExistingUser')
  })
})
