/**
 * CREATED DATE: 2018/10/29 19:33:36
 * author: Absent Min
 * email: 847679250@qq.com
 */
import React from 'react'
import { Card, Table } from 'antd'
import axios from './../../axios/index'

export default class BasicTable extends React.Component {
  componentWillMount() {
    const dataSource2 = []
    const dataSource = [
      {
        id: '0',
        username: 'jack',
        gender: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-20',
        address: '浙江省宁波市'
      },
      {
        id: '1',
        username: 'tom',
        gender: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-20',
        address: '浙江省宁波市'
      },
      {
        id: '2',
        username: 'lily',
        gender: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-20',
        address: '浙江省宁波市'
      }
    ]
    this.setState({
      dataSource,
      dataSource2
    })
    this.request()
  }
  request = () => {
    axios.ajax({
      url: '/table/list',
      data: {
        params: {
          page: 1
        }
      }
    }).then(res => {
      console.log(res)
      if (res.code === 0) {
        this.setState({
          dataSource2: res.result
        })
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
        key: 'gender'
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state'
      },
      {
        title: '爱好',
        dataIndex: 'interest',
        key: 'interest'
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
    return(
      <div>
        <Card title="基础表格">
          <Table
            columns={columns}
            dataSource={this.state.dataSource}
          />
        </Card>
        <Card title="动态数据渲染表格">
          <Table
            rowKey={columns => columns.key}
            columns={columns}
            dataSource={this.state.dataSource2}
          />
        </Card>
      </div>
    )
  }
}