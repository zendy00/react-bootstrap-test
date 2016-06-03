import React, { Component } from 'react'
import { Link, RouteHandler } from 'react-router'

import TopBar from './TopBar'
import SideMenu from './SideMenu'

export default class App extends Component {

  render() {
    return (
      <div id="wrapper">
        {/* Navigation */}
        <nav class="navbar navbar-default navbar-static-top" role="navigation" style={{marginBottom: 0}}>
            <TopBar></TopBar>
            {/* /.navbar-top-links */}

            <SideMenu></SideMenu>
            {/* /.navbar-static-side */}
        </nav>

        {this.props.children}
        {/* /#page-wrapper */}
      </div>
    )
  }
}
