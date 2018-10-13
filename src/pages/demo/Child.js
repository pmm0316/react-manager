/**
 * CREATED DATE: 2018/9/28 20:33:33
 * author: Absent Min
 */
import React from 'react'

export default class Child extends React.Component {
  /*constructor(props) {
    super(props)
    /!*this.state = {
      count: 0
    }*!/
  }*/
  /*state = {
    count: 0
  }*/
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps,' + newProps.name)
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  render() {
    return (
      <div>
        <p>this is child</p>
        <p>{this.props.name}</p>
      </div>
    )
  }
}