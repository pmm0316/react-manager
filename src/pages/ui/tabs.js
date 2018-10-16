/**
 * CREATED DATE: 2018/10/16 19:47:03
 * author: Absent Min
 * email: 847679250@qq.com
 */
import React from 'react'
import { Card, message, Tabs, Icon} from 'antd'
import './ui.less'
const TabPane = Tabs.TabPane

export default class Tab extends React.Component {
  newTabIndex = 0
  handleChange = (key) => {
    message.info(`key：${key}`)
  }
  componentWillMount() {
    const panes = [
      {
        title: 'Tab 1',
        content: 'Content of Tab 1',
        key: '1'
      },
      {
        title: 'Tab 2',
        content: 'Content of Tab 2',
        key: '2'
      },
      {
        title: 'Tab 3',
        content: 'Content of Tab 3',
        key: '3'
      }
    ]
    this.setState({
      activeKey: panes[0].key,
      panes
    })
  }
  onChange = (key) => {
    this.setState({
      activeKey: key
    })
  }
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }

  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
  }

  remove = (targetKey) => {
    let activeKey = this.state.activeKey
    let lastIndex
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1
      }
    })
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key
    }
    this.setState({ panes, activeKey })
  }
  render() {
    return(
      <div>
        <Card title="Tab标签页" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.handleChange}>
            <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
        </Card>
        <Card title="Tab带图的页签" className="card-wrap">
          <Tabs defaultActiveKey="2" onChange={this.handleChange}>
            <TabPane tab={<span><Icon type="plus"/>Tab 1</span>} key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab={<span><Icon type="edit"/>Tab 2</span>} key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab={<span><Icon type="delete"/>Tab 3</span>} key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
        </Card>
        <Card title="Tab动态增删" className="card-wrap">
          <Tabs defaultActiveKey="2"
                onEdit={this.onEdit}
                activeKey={this.state.activeKey}
                onChange={this.onChange}
                type="editable-card">
            {
              this.state.panes.map(pane => {
                return <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>
              })
            }
          </Tabs>
        </Card>
      </div>
    )
  }
}