/**
 * CREATED DATE: 2018/10/14 22:07:44
 * author: Absent Min
 * email: 847679250@qq.com
 */
import React from 'react'
import { Button, Card, message } from 'antd'
import './ui.less'

export default class Messages extends React.Component {
  showMessage = (type) => {
    message[type]('Congratulations on completing today\' study mission')
  }
  render() {
    return(
      <div>
        <Card title="全局提示框" className="card-wrap">
          <Button type="primary" onClick={() => this.showMessage('success')}>Success</Button>
          <Button type="primary" onClick={() => this.showMessage('info')}>Info</Button>
          <Button type="primary" onClick={() => this.showMessage('warning')}>Warning</Button>
          <Button type="primary" onClick={() => this.showMessage('error')}>Error</Button>
          <Button type="primary" onClick={() => this.showMessage('loading')}>Loading</Button>
        </Card>
      </div>
    )
  }
}