/**
 * CREATED DATE: 2018/10/6 12:21:45
 * author: Absent Min
 */
import React from 'react'
import { Select } from 'antd'
const Option = Select.Option
export default {
  formatDate(time) {
    if(!time) return ''
    let date = new Date(time)
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-'
      + date.getDay() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' +date.getSeconds()
  },
  pagination(data, callback) {
    let page = {
      onChange:(current) => {
        callback(current)
      },
      current: data.result.page,
      pageSize: data.result.pageSize,
      total: data.result.totalCount,
      showTotal:() => {
        return `共${data.result.totalCount}条`
      },
      showQuickJumper: true
    }
    return page
  },
  getOptionList(data) {
    console.log(data)
    if (!data) {
      return []
    }
    let options = []
    data.forEach(v => {
      options.push(<Option value={v.id} key={v.id}>{v.name}</Option>)
    })
    return options
  }
}