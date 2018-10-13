/**
 * CREATED DATE: 2018/10/8 21:51:18
 * author: Absent Min
 */
import React from 'react'
import {Card, Button, Icon, Radio} from 'antd'
import './ui.less'
const ButtonGroup = Button.Group
const RadioGroup = Radio.Group

export default class Buttons extends React.Component {
  state = {
    loading: true,
    loadingLabel: '关闭',
    size: 'small',
    value: 'small'
  }
  handleCloseLoading=() => {
    this.setState({
      loading: !this.state.loading,
      loadingLabel: this.state.loading ? '打开' : '关闭'
    })
  }
  onChange=(e) => {
    this.setState({
      size: e.target.value,
      value: e.target.value
    })
  }
  render() {
    return(
      <div>
        <Card title="基础按钮">
        <Button type="primary">Primary</Button>
        <Button type="default">Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button disabled>Disabled</Button>
      </Card>
        <Card title="图形按钮">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button shape="circle" icon="search"></Button>
          <Button type="primary" icon="search">搜索</Button>
          <Button type="primary" icon="download">下载</Button>
        </Card>
        <Card title="loading按钮">
          <Button type="primary" loading={this.state.loading}>确定</Button>
          <Button type="primary" loading={this.state.loading} shape="circle"></Button>
          <Button loading={this.state.loading}>点击加载</Button>
          <Button loading={this.state.loading} shape="circle"></Button>
          <Button onClick={this.handleCloseLoading}>{this.state.loadingLabel}</Button>
        </Card>
        <Card title="按钮组">
           <ButtonGroup className="button-group">
             <Button type="primary">
               <Icon type="left"/>返回
             </Button>
             <Button type="primary">
               前进<Icon type="right"/>
             </Button>
           </ButtonGroup>
        </Card>
        <Card title="按钮尺寸">
          <div>
            <RadioGroup onChange={this.onChange} value={this.state.value}>
              <Radio value="small">small</Radio>
              <Radio value="default">Default</Radio>
              <Radio value="large">Large</Radio>
            </RadioGroup>
            <Button size={this.state.size} type="primary">按钮</Button>
            <Button size={this.state.size} shape="circle" icon="search"></Button>
            <Button size={this.state.size} icon="download">按钮</Button>
          </div>
        </Card>
      </div>
    )
  }
}