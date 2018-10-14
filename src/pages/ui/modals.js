/**
 * CREATED DATE: 2018/10/13 12:44:56
 * author: Absent Min
 * email: 847679250@qq.com
 */
import React from 'react'
import { Card, Button, Modal } from 'antd'

export default class Modals extends React.Component {
  state = {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false
  }
  handleOpen=(type) => {
    this.setState({
      [type]: true
    })
  }
  handleConfirm=(type) => {
    Modal[type]({
      title: 'confirm？',
      content: 'Do you want to be a programmer?',
      onOk() {
        console.log('onOk')
      },
      onCancel() {
        console.log('onCancel')
      }
    })
  }
  render() {
    return (
      <div>
        <Card title="基础模态框">
          <Button type="primary" onClick={() => this.handleOpen('showModal1')}>open</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal3')}>顶部20px弹框</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
        </Card>
        <Card title="消息确认框">
          <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
          <Button type="default" onClick={() => this.handleConfirm('info')}>Info</Button>
          <Button type="primary" onClick={() => this.handleConfirm('success')}>Success</Button>
          <Button type="primary" onClick={() => this.handleConfirm('warning')}>Warning</Button>
          <Button type="danger" onClick={() => this.handleConfirm('error')}>Warning</Button>
        </Card>
        <Modal visible={this.state.showModal1}
               title="React"
               onCancel={() => {
                 this.setState({
                   showModal1: false
                 })
               }}>
          <p>i want to learn React framework</p>
          <p>我想要学习react框架</p>
        </Modal>
        <Modal visible={this.state.showModal2}
               title="React"
               okText="好的"
               cancelText="算了"
               onCancel={() => {
                 this.setState({
                   showModal2: false
                 })
               }}>
          <p>I ordered a takeouts at noon today</p>
          <p>我今天中午点了一个外卖</p>
        </Modal>
        <Modal visible={this.state.showModal3}
               style={{top: 20}}
               title="React"
               okText="好的"
               cancelText="算了"
               onCancel={() => {
                 this.setState({
                   showModal3: false
                 })
               }}>
          <p>I play games named LOL with my friends this afternoon</p>
          <p>我今天下午和朋友一起打叫LOL的游戏</p>
        </Modal>
        <Modal visible={this.state.showModal4}
               wrapClassName="vertical-center-modal"
               title="React"
               okText="好的"
               cancelText="算了"
               onCancel={() => {
                 this.setState({
                   showModal4: false
                 })
               }}>
          <p>I'm going to work on Monday</p>
          <p>我周一要去上班</p>
        </Modal>
      </div>
    )
  }
}