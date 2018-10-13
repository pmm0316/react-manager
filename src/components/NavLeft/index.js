/**
 * CREATED DATE: 2018/9/30 21:37:07
 * author: Absent Min
 */
import React from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import menuConfig from './../../config/menuConfig'
import './index.less'
const SubMenu = Menu.SubMenu

export default class NavLeft extends React.Component {
  componentWillMount() {
    const menuTreeNode = this.renderMenu(menuConfig)
    this.setState({
      menuTreeNode: menuTreeNode
    })
  }
  // 菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      )
    })
  }
  render() {
    return(
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt=""/>
          <h1>React MS</h1>
        </div>
        <Menu theme="dark" style={{ width: 256 }} mode="vertical">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}