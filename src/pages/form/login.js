/**
 * CREATED DATE: 2018/10/21 16:34:01
 * author: Absent Min
 * email: 847679250@qq.com
 */
import React from 'react'
import { Card, Form, Input, Button, message, Checkbox, Icon } from 'antd'
const FormItem = Form.Item

class FormLogin extends React.Component {
  handleSubmit = () => {
    //let userInfo = this.props.form.getFieldsValue()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(`password is ${values.password}`)
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return(
      <div>
        <Card title="行内登录表单">
          <Form layout="inline">
            <FormItem>
              {
                getFieldDecorator('username', {
                  initialValue: 'Jack',
                  rules: [
                    {required: true, message: 'username can\'t be empty'}
                  ]
                })(<Input placeholder="username"/>)
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('password', {
                  initialValue: '123456',
                  rules: []
                })(<Input placeholder="password"/>)
              }
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={this.handleSubmit}>Login</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="行内登录表单">
          <Form style={{width: 300}}>
            <FormItem>
              {
                getFieldDecorator('username2', {
                  rules: [
                    {min: 5, max: 10, message: '长度过长或过短'}
                  ]
                })(<Input prefix={<Icon type="user"/>} placeholder="username2"/>)
              }
            </FormItem>
            <FormItem>
              <Input prefix={<Icon type="lock"/>} placeholder="password2"/>
            </FormItem>
            <FormItem>
              <Button type="primary">Login</Button>
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                  rules: [
                    {min: 5, max: 10, message: '长度过长或过短'}
                  ]
                })(<Checkbox>remember me</Checkbox>)
              }
              <a style={{float: "right"}}>forget password</a>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}
export default Form.create()(FormLogin)