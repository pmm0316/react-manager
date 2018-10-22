/**
 * CREATED DATE: 2018/10/21 16:34:01
 * author: Absent Min
 * email: 847679250@qq.com
 */
import React from 'react'
import {
  Card, Form, Input,
  Button, message, Checkbox,
  Icon, Radio, InputNumber,
  Select
} from 'antd'
const FormItem = Form.Item
const RadioGroup = Radio.Group
const Option = Select.Option

class FormRegister extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: 24,
        sm: 4
      },
      wrapperCol: {
        xs: 24,
        sm: 12
      }
    }

    return(
      <div>
        <Card title="注册表单">
          <Form layout="horizontal">
            <FormItem label="用户名" {...formItemLayout}>
              {
                getFieldDecorator('username', {
                  initialValue: 'Jack',
                  rules: [
                    {required: true, message: 'username can\'t be empty'}
                  ]
                })(<Input placeholder="username"/>)
              }
            </FormItem>
            <FormItem label="密码" {...formItemLayout}>
              {
                getFieldDecorator('password', {
                  initialValue: '123456',
                  rules: [
                    {required: true, message: 'password can\'t be empty'}
                  ]
                })(<Input placeholder="password"/>)
              }
            </FormItem>
            <FormItem label="姓别" {...formItemLayout}>
              {
                getFieldDecorator('gender', {
                  initialValue: '1'
                })(
                  <RadioGroup>
                    <Radio value="1">男</Radio>
                    <Radio value="2">女</Radio>
                  </RadioGroup>
                )
              }
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {
                getFieldDecorator('age', {
                  initialValue: '1'
                })(
                  <InputNumber/>
                )
              }
            </FormItem>
            <FormItem label="当前状态" {...formItemLayout}>
              {
                getFieldDecorator('state', {
                  initialValue: 1
                })(
                  <Select>
                    <Option value={1}>咸鱼一条</Option>
                    <Option value={2}>北大才子</Option>
                    <Option value={3}>风华浪子</Option>
                    <Option value={4}>大神</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="爱好" {...formItemLayout}>
              {
                getFieldDecorator('interest', {
                  initialValue: [1, 3]
                })(
                  <Select mode="multiple">
                    <Option value={1}>游泳</Option>
                    <Option value={2}>跑步</Option>
                    <Option value={3}>打篮球</Option>
                    <Option value={4}>羽毛球</Option>
                  </Select>
                )
              }
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}
export default Form.create()(FormRegister)