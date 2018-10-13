/**
 * CREATED DATE: 2018/10/7 21:11:51
 * author: Absent Min
 */
import React from 'react'
import {HashRouter, Link, Route} from 'react-router-dom'
import Main from './main'
import About from './about'
import Topic from './topic'

export default class Home extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/topic">topic</Link></li>
          </ul>
          <Route exact={true} path="/" component={Main}/>
          <Route path="/about" component={About}/>
          <Route path="/topic" component={Topic}/>
        </div>
      </HashRouter>
    )
  }
}