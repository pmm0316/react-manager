/*
 * @Author: your name
 * @Date: 2020-11-21 09:39:33
 * @LastEditTime: 2020-11-21 10:39:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-manager\src\components\Header\index.js
 */
/**
 * CREATED DATE: 2018/9/30 21:35:48
 * author: Absent Min
 */
import React from 'react'
import {Row, Col} from 'antd'
import './index.less'
import Util from '../../utils/utils'
// import axios from '../../axios'

export default class Header extends React.Component {
  componentWillMount() {
    this.setState({
      userName: '河畔一角'
    })
    setInterval(()=> {
      this.setState({
        sysTime: Util.formatDate(new Date().getTime())
      })
    },1000)
    // this.getWeatherAPIDate()
  }
  // getWeatherAPIDate() {
  //   let city = '北京'
  //   axios.jsonp({
  //     url: 'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
  //   }).then((res) => {
  //     console.log(res)
  //     if (res.status === 'success') {
  //       let data = res.results[0].weather_data[0]
  //       this.setState({
  //         dayPictureUrl: data.dayPictureUrl,
  //         weather: data.weather
  //       })
  //     }
  //   })
  // }
  render() {
    const menuType = this.props.menuType
    return (
      <div className="header">
        <Row span={24} className="header-top">
          {
            menuType ?
              <Col span={6} className="logo">
                <img alt="logo" src="/assets/logo-ant.svg"/>
                <span>IMOOC 通用管理系统</span>
              </Col>
            : ''
          }
          <Col span={menuType ? 18 : 24}>
            <span>欢迎，{this.state.userName}</span>
            <a href="">退出</a>
          </Col>
        </Row>
        {
          menuType ? '' :
            <Row span={24} className="breadcrumb">
            <Col className="breadcrumb-title" span={4}>首页</Col>
            <Col span={20} className="weather">
              <span className="date">{this.state.sysTime}</span>
              <span className="weather-img">
              <img src={this.state.dayPictureUrl} alt=""/>
            </span>
              <span className="weather-detail">
              {this.state.weather}
            </span>
            </Col>
          </Row>
        }
      </div>
    )
  }
}