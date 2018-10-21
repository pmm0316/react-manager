/**
 * CREATED DATE: 2018/10/18 18:57:34
 * author: Absent Min
 * email: 847679250@qq.com
 */
import React from 'react'
import { Card, Row, Col } from 'antd'

export default class Gallery extends React.Component {
  componentWillMount() {
    const suffix = '.png'
    let imgs = []
    let number = 1
    for (let i = 0; i < 5; i++) {
      let item = []
      for (let j = 0; j < 5; j++) {
        item.push(number.toLocaleString().concat(suffix))
        number++
      }
      imgs.push(item)
    }
    this.setState({
      imgs
    })
  }
  render() {
    console.log(this.state.imgs)
    let imgs = this.state.imgs
    const imgList = imgs.map(list => list.map(item => {
      return(
        <Card cover={<img alt="example" src={'/gallery/' + item}/>} key={item}>
          <Card.Meta titel="React Admin" description="I love China"/>
        </Card>
      )
    }))
    return(
      <div className="card-wrap">
        <Row gutter={10}>
          <Col md={5}>
            {imgList[0]}
          </Col>
          <Col md={5}>
            {imgList[1]}
          </Col>
          <Col md={5}>
            {imgList[2]}
          </Col>
          <Col md={5}>
            {imgList[3]}
          </Col>
          <Col md={4}>
            {imgList[4]}
          </Col>
        </Row>
      </div>
    )
  }
}