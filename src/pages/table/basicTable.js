/**
 * CREATED DATE: 2018/10/29 19:33:36
 * author: Absent Min
 * email: 847679250@qq.com
 */
import React from 'react'
import { Card, Table, Button, Modal, message } from 'antd'
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
    dataSource.forEach((item, index) => {
      item.key = index
    })
    this.setState({
      dataSource,
      dataSource2
    })
    this.request()
  }
  request = () => {
    let _this = this
    axios.ajax({
      url: '/table/list',
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
  onRowClick = (record, index) => {
    let selectionKeys = [index]
    this.setState({
      selectedRowKeys: selectionKeys,
      selectedCheckRowKeys: [],
      selectedItem: record
    })
  }
  handleDelete = (()=>{
    let rows = this.state.selectedRows
    if (!rows) {
      message.error('请选择要删除的数据')
      return
    }
    let ids = []
    rows.forEach(item => {
      ids.push(item.id)
    })
    Modal.confirm({
      title: '删除提示',
      content: `您确定要删除这些数据吗？${ids.join(',')}`,
      onOk:() => {
        message.success('删除成功')
        this.request()
      }
    })
  })
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
    const { selectedRowKeys, selectedCheckRowKeys } = this.state
    const rowSelection = {
      type: 'radio',
      selectedRowKeys
    }
    const rowCheckSelection = {
      type: 'checkbox',
      selectedRowKeys: selectedCheckRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({
          selectedCheckRowKeys: selectedRowKeys,
          selectedRows
        })
      }
    }
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
        <Card title="渲染表格-单选">
          <Table
            rowSelection={rowSelection}
            rowKey={columns => columns.key}
            columns={columns}
            dataSource={this.state.dataSource2}
            onRow={(record, index) => {
              return {
                onClick:() => {
                  this.onRowClick(record, index)
                },       // 点击行
              };
            }}
          />
        </Card>
        <Card title="渲染表格-多选">
          <div>
            <Button onClick={this.handleDelete}>删除</Button>
          </div>
          <Table
            style={{margin: '10px 0'}}
            bordered
            rowSelection={rowCheckSelection}
            rowKey={columns => columns.key}
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
        </Card>
        <Card title="渲染表格-分页">
          <Table
            style={{margin: '10px 0'}}
            bordered
            rowKey={columns => columns.key}
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={this.state.pagination}
          />
        </Card>
      </div>
    )
  }
}