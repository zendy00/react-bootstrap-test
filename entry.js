import React from 'react'
import {render} from 'react-dom'

import route from './src/route/route'
import 'bootstrap/less/bootstrap.less'
import 'sb-admin-2.less'
import 'font-awesome.less'
import 'timeline.css'
import 'bootstrap'
import 'metismenu'

import 'startbootstrap-sb-admin-2/dist/js/sb-admin-2'
import 'bootstrap-social/bootstrap-social.css'

render(route, document.getElementById('app'))
