/**
 * CREATED DATE: 2018/10/8 19:38:43
 * author: Absent Min
 */
import React from 'react'
import {Link} from 'react-router-dom'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/main">Home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/topic">topic</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}