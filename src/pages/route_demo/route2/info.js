/**
 * CREATED DATE: 2018/10/8 19:46:42
 * author: Absent Min
 */
import React from 'react'

export default class Info extends React.Component {
  render() {
    return (
      <div>
        这是测试路由
        value:{this.props.match.params.value}
      </div>
    )
  }
}