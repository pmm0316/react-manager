/**
 * CREATED DATE: 2018/10/8 20:17:42
 * author: Absent Min
 */
import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import App from './App.js'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'

export default class IRouter extends React.Component {
  render() {
    return(
      <HashRouter>
        <App>
          <Route path="/login" component={Login}/>
          <Route path="/admin" render={()=>
            <Admin>
              <Route path="/admin/ui/buttons" component={Buttons}/>
            </Admin>
          }/>
          <Route path="/order/detail" component={Login}/>
        </App>
      </HashRouter>
    )
  }
}