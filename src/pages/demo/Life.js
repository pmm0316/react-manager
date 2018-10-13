/**
 * CREATED DATE: 2018/9/27 22:38:32
 * author: Absent Min
 */
import React from 'react'
import Child from './Child'
import {Button} from 'antd'
//import 'antd/dist/antd.css'
import './index.less'

export default class Life extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    /*let style = {
      padding: 50
    }*/
    return (
      <div className="content">
        <p>React生命周期介绍</p>
        <Button onClick={this.handleAdd}>点击一下</Button>
        <p>{this.state.count}</p>
        <Child name={this.state.count}/>
      </div>
    )
  }
}