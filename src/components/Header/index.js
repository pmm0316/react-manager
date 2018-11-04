/**
 * CREATED DATE: 2018/9/30 21:35:48
 * author: Absent Min
 */
import React from 'react'
import {Row, Col} from 'antd'
import './index.less'
import Util from '../../utils/utils'
import axios from '../../axios'

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
    this.getWeatherAPIDate()
  }
  getWeatherAPIDate() {
    let city = '北京'
    axios.jsonp({
      url: 'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    }).then((res) => {
      console.log(res)
      if (res.status === 'success') {
        let data = res.results[0].weather_data[0]
        this.setState({
          dayPictureUrl: data.dayPictureUrl,
          weather: data.weather
        })
      }
    })
  }
  render() {
    return (
      <div className="header">
        <Row span={24} className="header-top">
          <Col span={24}>
            <span>欢迎，{this.state.userName}</span>
            <a href="">退出</a>
          </Col>
        </Row>
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
      </div>
    )
  }
}