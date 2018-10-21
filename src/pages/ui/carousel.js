/**
 * CREATED DATE: 2018/10/21 11:15:00
 * author: Absent Min
 * email: 847679250@qq.com
 */
import React from 'react'
import { Card, Carousel } from 'antd'
import './ui.less'

export default class ICarousel extends React.Component {
  render() {
    return (
      <div>
        <Card title="文字背景轮播" className="card-wrap">
          <Carousel autoplay effect="fade">
            <div><h3>React</h3></div>
            <div><h3>Vue</h3></div>
            <div><h3>JQuery</h3></div>
          </Carousel>
        </Card>
        <Card title="图片轮播" className="slider-wrap">
          <Carousel autoplay effect="fade">
            <div><img src="/carousel-img/carousel-1.jpg" alt="example"/></div>
            <div><img src="/carousel-img/carousel-2.jpg" alt="example"/></div>
            <div><img src="/carousel-img/carousel-3.jpg" alt="example"/></div>
          </Carousel>
        </Card>
      </div>
    )
  }
}