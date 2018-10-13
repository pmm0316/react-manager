/**
 * CREATED DATE: 2018/10/7 21:11:51
 * author: Absent Min
 */
import React from 'react'
import {Route, HashRouter as Router} from 'react-router-dom'
import Home from './home'
import Main from './main'
import Info from './info'
import About from './about'
import Topic from './topic'

export default class IRouter extends React.Component {
  render() {
    return (
      <Router>
        <Home>
          <Route exact={true} path="/main" render={()=>
            <Main>
              <Route path="/main/:value" component={Info}>
              </Route>
            </Main>
          }/>
          <Route path="/about" component={About}/>
          <Route path="/topic" component={Topic}/>
        </Home>
      </Router>
    )
  }
}