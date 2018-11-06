import React, { Component } from 'react'
import { isExistingUser } from '../lib'

export default class Menu extends Component {
  existingUser () {
    return isExistingUser()
  }

  render () {
    return null
  }
}
