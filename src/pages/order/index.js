/**
 * CREATED DATE: 2018/11/4 19:02:44
 * author: Absent Min
 * email: 847679250@qq.com
 */
import React from 'react'
import {
  Card, Button, Form,
  Select, Table, DatePicker,
  Modal
} from 'antd'
import axios from '../../axios'
import Utils from '../../utils/utils'
const FormItem = Form.Item
const Option = Select.Option

export default class Order extends React.Component {
  state = {
  }
  params = {
    page: 1
  }
  componentDidMount() {
    this.requestList()
  }
  requestList = () => {
    let _this = this
    axios.ajax({
      url: '/order/list',
      data: {
        params: this.params.page
      }
    }).then(res => {
      console.log(res)
      if (res.code === 0) {
        let list = res.result.itemList.map((item, index) => {
          item.key = index
          return item
        })
        this.setState({
          list,
          pagination: Utils.pagination(res, (current) => {
            _this.params.page = current
            _this.requestList()
          })
        })
      }
    })
  }
  onRowClick = (record, index) => {
    let selectKey = [index]
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record
    })
  }
  openOrderDetail = () => {
    let item = this.state.selectedItem
    if (!item) {
      Modal.info({
        title: '信息',
        content: '请选择一条订单'
      })
      return
    }
    window.open(`/common/order/detail/${item.id}`, '_bank')
  }
  render() {
    const columns = [
      {
        title: '订单编号',
        dataIndex: 'orderSn'
      },
      {
        title: '车辆编号',
        dataIndex: 'bikeSn'
      },
      {
        title: '用户名',
        dataIndex: 'username'
      },
      {
        title: '手机号',
        dataIndex: 'mobile'
      },
      {
        title: '里程',
        dataIndex: 'distance'
      },
      {
        title: '行驶时长',
        dataIndex: 'totalTime'
      },
      {
        title: '状态',
        dataIndex: 'status'
      },
      {
        title: '开始时间',
        dataIndex: 'startTime'
      },
      {
        title: '结束时间',
        dataIndex: 'endTime'
      },
      {
        title: '订单金额',
        dataIndex: 'totalFee'
      },
      {
        title: '实付金额',
        dataIndex: 'userPay'
      }
    ]
    const selectedRowKeys = this.state.selectedRowKeys
    const rowSelection = {
      type: 'radio',
      selectedRowKeys
    }
    return (
      <div>
        <Card>
          <FilterForm/>
        </Card>
        <Card>
          <Button type="primary" onClick={this.openOrderDetail}>订单详情</Button>
          <Button>结束订单</Button>
        </Card>
        <div>
          <Table
            bordered
            columns={columns}
            dataSource={this.state.list}
            pagination={this.state.pagination}
            rowSelection={rowSelection}
            onRow={(record, index) => {
              return {
                onClick:() => {
                  this.onRowClick(record, index)
                }
              }
            }}
          />
        </div>
      </div>
    )
  }
}

class FilterForm extends React.Component{

  render(){
    const { getFieldDecorator } = this.props.form
    return (
      <Form layout="inline">
        <FormItem label="城市">
          {
            getFieldDecorator('city_id')(
              <Select
                style={{width:100}}
                placeholder="全部"
              >
                <Option value="">全部</Option>
                <Option value="1">北京市</Option>
                <Option value="2">天津市</Option>
                <Option value="3">深圳市</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="订单时间">
          {
            getFieldDecorator('startTime')(
             <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
            )
          }

        </FormItem>
        <FormItem>
          {
            getFieldDecorator('endTime')(
              <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
            )
          }
        </FormItem>
        <FormItem label="订单状态">
          {
            getFieldDecorator('op_mode')(
              <Select
                style={{ width: 80 }}
                placeholder="全部"
              >
                <Option value="">全部</Option>
                <Option value="1">进行中</Option>
                <Option value="2">结束行程</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="加盟商授权状态">
          {
            getFieldDecorator('auth_status')(
              <Select
                style={{ width: 100 }}
                placeholder="全部"
              >
                <Option value="">全部</Option>
                <Option value="1">已授权</Option>
                <Option value="2">未授权</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem>
          <Button type="primary" style={{margin:'0 20px'}}>查询</Button>
          <Button>重置</Button>
        </FormItem>
      </Form>
    );
  }
}
FilterForm = Form.create({})(FilterForm)