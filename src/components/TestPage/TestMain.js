import React, { Component } from 'react'
import { Link } from 'react-router'

import configureStore from '../../redux/store'
import { Provider } from 'react-redux'

import TestComponent from './TestComponent'

let initialState = {
  test: []
}

let store = configureStore(initialState)

class TestMain extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
        <TestComponent></TestComponent>
        </div>
      </Provider>
    )
  }

}

export default TestMain
