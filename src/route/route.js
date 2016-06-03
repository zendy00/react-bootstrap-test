import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from '../pages/App'
import Dashboard from '../pages/Dashboard'
import Tables from '../pages/SBAdminPages/Tables'
import PanelWells from '../pages/SBAdminPages/PanelWells'
import Buttons from '../pages/SBAdminPages/Buttons'
import Notifications from '../pages/SBAdminPages/Notifications'
import Icons from '../pages/SBAdminPages/Icons'
import Grid from '../pages/SBAdminPages/Grid'
import Forms from '../pages/SBAdminPages/Forms'
import TestMain from '../components/TestPage/TestMain'
import TestMain2 from '../components/TestPage2/TestMain2'

module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="/tables" component={Tables} />
      <Route path="/panelWells" component={PanelWells} />
      <Route path="/buttons" component={Buttons} />
      <Route path="/notifications" component={Notifications} />
      <Route path="/icons" component={Icons} />
      <Route path="/grid" component={Grid} />
        <Route path="/forms" component={Forms} />
      <Route path="/main1" component={TestMain}/>
      <Route path="/main2" component={TestMain2}/>
    </Route>
  </Router>
)
