/**
 * CREATED DATE: 2018/10/14 21:28:18
 * author: Absent Min
 * email: 847679250@qq.com
 */
import React from 'react'
import { Card, notification, Button } from 'antd'
import './ui.less'

export default class Notice extends React.Component {
  openNotification = (type, direction) => {
    if (direction) {
      notification.config({
        placement: direction
      })
    }
    notification[type]({
      message: 'payoff',
      description: 'Actually received 2000 yuan salary'
    })
  }
  render() {
    return (
      <div>
        <Card title="消息提醒框" className="card-wrap">
          <Button type="primary" onClick={() => this.openNotification('success')}>Success</Button>
          <Button type="primary" onClick={() => this.openNotification('info')}>Info</Button>
          <Button type="primary" onClick={() => this.openNotification('warning')}>Warning</Button>
          <Button type="dander" onClick={() => this.openNotification('error')}>Error</Button>
        </Card>
        <Card title="消息提醒框(位置)" className="card-wrap">
          <Button type="primary" onClick={() => this.openNotification('success', 'topLeft')}>Success</Button>
          <Button type="primary" onClick={() => this.openNotification('info', 'topRight')}>Info</Button>
          <Button type="primary" onClick={() => this.openNotification('warning', 'bottomLeft')}>Warning</Button>
          <Button type="dander" onClick={() => this.openNotification('error', 'bottomRight')}>Error</Button>
        </Card>
      </div>
    )
  }
}