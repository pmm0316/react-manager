/**
 * CREATED DATE: 2018/10/14 12:44:21
 * author: Absent Min
 * email: 847679250@qq.com
 */
import React from 'react'
import { Card, Spin, Icon, Alert} from 'antd'
import './ui.less'

export default class Loadings extends React.Component {
  render() {
    const icon = <Icon type="loading" style={{fontSize: 24}}/>
    let spinStyle = {
      marginRight: 20
    }
    return (
      <div>
        <Card class="card-wrap" title="Spin 用法">
          <Spin size="small" style={spinStyle}/>
          <Spin style={spinStyle}/>
          <Spin size="large" style={spinStyle}/>
          <Spin indicator={icon} style={spinStyle}/>
        </Card>
        <Card class="card-wrap" title="内容遮罩">
          <Alert
            message="React"
            description="Welcome to the advanced practice class on React"
            type="info"
          />
          <Spin>
            <Alert
              message="React"
              description="Welcome to the advanced practice class on React"
              type="warning"
            />
          </Spin>
          <Spin tip="加载中...">
            <Alert
              message="React"
              description="Welcome to the advanced practice class on React"
              type="success"
            />
          </Spin>
          <Spin indicator={icon}>
            <Alert
              message="React"
              description="Welcome to the advanced practice class on React"
            />
          </Spin>
        </Card>
      </div>
    )
  }
}