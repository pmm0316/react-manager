/**
 * CREATED DATE: 2018/11/4 14:39:42
 * author: Absent Min
 * email: 847679250@qq.com
 */
import React from 'react'
import { Card, Table, Badge, Modal, Button, message } from 'antd'
import axios from './../../axios/index'
import Utils from './../../utils/utils'

export default class BasicTable extends React.Component {
  state = {
    dataSource2: []
  }
  params = {
    page: 1
  }
  componentWillMount() {
    this.request()
  }
  request = () => {
    let _this = this
    axios.ajax({
      url: '/table/high/list',
      data: {
        params: {
          page: _this.params.page
        }
      }
    }).then(res => {
      console.log(res)
      if (res.code === 0) {
        res.result.list.forEach((item, index) => {
          item.key = index
        })
        this.setState({
          dataSource2: res.result.list,
          selectedCheckRowKeys: [],
          selectedRows: null,
          pagination: Utils.pagination(res, (current)=>{
            //todo
            _this.params.page = current
            this.request()
          })
        })
      }
    })
  }
  handleChange = (pagination, filters, sorter) => {
    this.setState({
      sortOrder: sorter.order
    })
  }
  handleDelete = (item) => {
    //let id = item.id
    Modal.confirm({
      title: '确认',
      content: '确认删除这条数据吗？',
      onOk:() => {
        this.request()
        message.success('删除成功！')
      }
    })
  }
  render() {
    const columns = [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username'
      },
      {
        title: '性别',
        dataIndex: 'gender',
        key: 'gender',
        render(gender) {
          return gender === 1 ? '男': '女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state'
      },
      {
        title: '爱好',
        dataIndex: 'interest',
        key: 'interest',
        render(interest) {
          let config = {
            '1': '篮球',
            '2': '游泳',
            '3': '羽毛球',
            '4': '足球',
            '5': '跑步',
            '6': '网球',
            '7': '排球',
            '8': '冰球',
          }
          return config[interest]
        }
      },
      {
        title: '生日',
        dataIndex: 'birthday',
        key: 'birthday'
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address'
      }
    ]
    const columns2 = [
      {
        title: 'id',
        dataIndex: 'id',
        fixed: 'left',
        key: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'username',
        fixed: 'left',
        key: 'username'
      },
      {
        title: '性别',
        dataIndex: 'gender',
        key: 'gender',
        render(gender) {
          return gender === 1 ? '男': '女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state'
      },
      {
        title: '爱好',
        dataIndex: 'interest',
        key: 'interest',
        render(interest) {
          let config = {
            '1': '篮球',
            '2': '游泳',
            '3': '羽毛球',
            '4': '足球',
            '5': '跑步',
            '6': '网球',
            '7': '排球',
            '8': '冰球',
          }
          return config[interest]
        }
      },
      {
        title: '生日',
        dataIndex: 'birthday',
        key: 'birthday1'
      },
      {
        title: '生日',
        dataIndex: 'birthday',
        key: 'birthday2'
      },
      {
        title: '生日',
        dataIndex: 'birthday',
        key: 'birthday3'
      },
      {
        title: '生日',
        dataIndex: 'birthday',
        key: 'birthday4'
      },
      {
        title: '生日',
        dataIndex: 'birthday',
        key: 'birthday5'
      },
      {
        title: '生日',
        dataIndex: 'birthday',
        key: 'birthday6'
      },
      {
        title: '生日',
        dataIndex: 'birthday',
        key: 'birthday7'
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address'
      }
    ]
    const columns3 = [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username'
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        sorter:(a, b) => {
          return a.age - b.age
        },
        sortOrder: this.state.sortOrder
      },
      {
        title: '性别',
        dataIndex: 'gender',
        key: 'gender',
        render(gender) {
          return gender === 1 ? '男': '女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state'
      },
      {
        title: '爱好',
        dataIndex: 'interest',
        key: 'interest',
        render(interest) {
          let config = {
            '1': '篮球',
            '2': '游泳',
            '3': '羽毛球',
            '4': '足球',
            '5': '跑步',
            '6': '网球',
            '7': '排球',
            '8': '冰球',
          }
          return config[interest]
        }
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address'
      }
    ]
    const columns4 = [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username'
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
      },
      {
        title: '性别',
        dataIndex: 'gender',
        key: 'gender',
        render(gender) {
          return gender === 1 ? '男': '女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state'
      },
      {
        title: '爱好',
        dataIndex: 'interest',
        key: 'interest',
        render(interest) {
          let config = {
            '1': <Badge status="success" text="篮球"/>,
            '2': <Badge status="error" text="游泳"/>,
            '3': '羽毛球',
            '4': '足球',
            '5': '跑步',
            '6': '网球',
            '7': '排球',
            '8': '冰球',
          }
          return config[interest]
        }
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address'
      }
    ]
    const columns5 = [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username'
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
      },
      {
        title: '性别',
        dataIndex: 'gender',
        key: 'gender',
        render(gender) {
          return gender === 1 ? '男': '女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state'
      },
      {
        title: '爱好',
        dataIndex: 'interest',
        key: 'interest',
        render(interest) {
          let config = {
            '1': <Badge status="success" text="篮球"/>,
            '2': <Badge status="error" text="游泳"/>,
            '3': '羽毛球',
            '4': '足球',
            '5': '跑步',
            '6': '网球',
            '7': '排球',
            '8': '冰球',
          }
          return config[interest]
        }
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address'
      },
      {
        title: '操作',
        render:(text, item) => {
          return (
            <Button size="small" type="danger" onClick={(item) => {this.handleDelete(item)}}>删除</Button>
          )
        }
      }
    ]
    return(
      <div>
        <Card title="表头固定">
          <Table
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
            scroll={{y: 240}}
          />
        </Card>
        <Card title="左侧固定">
          <Table
            columns={columns2}
            dataSource={this.state.dataSource2}
            pagination={false}
            scroll={{x: 1500}}
          />
        </Card>
        <Card title="表格排序">
          <Table
            columns={columns3}
            dataSource={this.state.dataSource2}
            onChange={this.handleChange}
            pagination={false}
          />
        </Card>
        <Card title="表格徽标">
          <Table
            columns={columns4}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
        </Card>
        <Card title="表格徽标">
          <Table
            columns={columns5}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
        </Card>
      </div>
    )
  }
}