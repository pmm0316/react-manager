/**
 * CREATED DATE: 2018/10/7 21:11:51
 * author: Absent Min
 */
import React from 'react'
import { Link } from 'react-router-dom'

export default class Main extends React.Component {
  render() {
    return (
      <div>
        this is main page
        <br/>
        <Link to="/main/test-id">嵌套路由1</Link>
        <br/>
        <Link to="/main/456">嵌套路由2</Link>
        {this.props.children}
      </div>
    )
  }
}
