import React from 'react'
import { Link } from 'react-router'

export default class SideMenu extends React.Component {

  render() {
    return (
      <div class="navbar-default sidebar" role="navigation">
          <div class="sidebar-nav navbar-collapse navbar-collapse">
              <ul class="nav" id="side-menu">
                  <li class="sidebar-search">
                      <div class="input-group custom-search-form">
                          <input type="text" class="form-control" placeholder="Search..." />
                          <span class="input-group-btn">
                          <button class="btn btn-default" type="button">
                              <i class="fa fa-search"></i>
                          </button>
                      </span>
                      </div>
                      {/* /input-group */}
                  </li>
                  <li>
                      <a href="index.html"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a>
                  </li>
                  <li>
                      <a href="#"><i class="fa fa-bar-chart-o fa-fw"></i> Charts<span class="fa arrow"></span></a>
                      <ul class="nav nav-second-level">
                          <li>
                              <a href="flot.html">Flot Charts</a>
                          </li>
                          <li>
                              <a href="morris.html">Morris.js Charts</a>
                          </li>
                      </ul>
                      {/* /.nav-second-level */}
                  </li>
                  <li>
                      <Link to="/tables"><i class="fa fa-table fa-fw"></i> Tables</Link>
                  </li>
                  <li>
                    <Link to="/forms"><i class="fa fa-edit fa-fw"></i> Forms</Link>
                  </li>
                  <li>
                      <a href="#"><i class="fa fa-wrench fa-fw"></i> UI Elements<span class="fa arrow"></span></a>
                      <ul class="nav nav-second-level">
                          <li>
                            <Link to="/panelWells">Panels and Wells</Link>
                          </li>
                          <li>
                            <Link to="/buttons">Buttons</Link>
                          </li>
                          <li>
                            <Link to="/notifications">Notifications</Link>
                          </li>
                          <li>
                              <a href="typography.html">Typography</a>
                          </li>
                          <li>
                            <Link to="/icons">Icons</Link>
                          </li>
                          <li>
                            <Link to="/grid">Grid</Link>
                          </li>
                      </ul>
                      {/* /.nav-second-level */}
                  </li>

                  <li>
                      <a href="#"><i class="fa fa-sitemap fa-fw"></i> Multi-Level Dropdown<span class="fa arrow"></span></a>
                      <ul class="nav nav-second-level">
                          <li>
                              <a href="#">Second Level Item</a>
                          </li>
                          <li>
                              <a href="#">Second Level Item</a>
                          </li>
                          <li>
                              <a href="#">Third Level <span class="fa arrow"></span></a>
                              <ul class="nav nav-third-level">
                                  <li>
                                      <a href="#">Third Level Item</a>
                                  </li>
                                  <li>
                                      <a href="#">Third Level Item</a>
                                  </li>
                                  <li>
                                      <a href="#">Third Level Item</a>
                                  </li>
                                  <li>
                                      <a href="#">Third Level Item</a>
                                  </li>
                              </ul>
                              {/* /.nav-third-level */}
                          </li>
                      </ul>
                      {/* /.nav-second-level */}
                  </li>
                  <li>
                      <a href="#"><i class="fa fa-files-o fa-fw"></i> Sample Pages<span class="fa arrow"></span></a>
                      <ul class="nav nav-second-level">
                          <li>
                              <a href="blank.html">Blank Page</a>
                          </li>
                          <li>
                              <a href="login.html">Login Page</a>
                          </li>
                      </ul>
                      {/* /.nav-second-level */}
                  </li>
              </ul>
          </div>
          {/* /.sidebar-collapse */}
      </div>

    )
  }

}
