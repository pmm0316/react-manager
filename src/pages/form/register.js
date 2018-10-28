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
  Select, Switch, DatePicker,
  Upload
} from 'antd'
import moment from 'moment'
const FormItem = Form.Item
const RadioGroup = Radio.Group
const Option = Select.Option
const TextArea = Input.TextArea

class FormRegister extends React.Component {
  state = {}
  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue()
    console.log(JSON.stringify(userInfo))
    message.success(`恭喜你注册成功，用户名为${userInfo.username}`)
  }
  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl => this.setState({
        userImg: imageUrl,
        loading: false,
      }));
    }
  }
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
    const offsetLayout = {
      wrapperCol: {
        xs: 24,
        sm: {
          span: 12,
          offset: 4
        }
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
            <FormItem label="是否已婚" {...formItemLayout}>
              {
                getFieldDecorator('isMarried', {
                  valuePropName: 'checked',
                  initialValue: true
                })(
                  <Switch/>
                )
              }
            </FormItem>
            <FormItem label="生日" {...formItemLayout}>
              {
                getFieldDecorator('birthday', {
                  initialValue: moment('2018-10-25')
                })(
                  <DatePicker showTime placeholder="select date"
                              format="YYYY-MM-DD HH:mm:ss"/>
                )
              }
            </FormItem>
            <FormItem label="联系地址" {...formItemLayout}>
              {
                getFieldDecorator('address', {
                  initialValue: '浙江省温州市瑞安市'
                })(
                  <TextArea autosize={
                    {minRows: 3}
                  }/>
                )
              }
            </FormItem>
            <FormItem label="早起时间" {...formItemLayout}>
              {
                getFieldDecorator('time', {
                  initialValue: moment('2018-10-25')
                })(
                  <DatePicker showTime
                              format="YYYY-MM-DD HH:mm:ss"/>
                )
              }
            </FormItem>
            <FormItem label="上传" {...formItemLayout}>
              {
                getFieldDecorator('upload')(
                  <Upload action="//jsonplaceholder.typicode.com/posts/"
                          listType="picture-card"
                          showUploadList="false" onChange={this.handleChange}>
                    {this.state.userImg?<img alt="头像" src={this.state.userImg}/>: <Icon type="plus"/>}
                  </Upload>
                )
              }
            </FormItem>
            <FormItem {...offsetLayout}>
              {
                getFieldDecorator('time', {
                  initialValue: moment('2018-10-25')
                })(
                  <Checkbox>我已阅读<a>协议</a></Checkbox>
                )
              }
            </FormItem>
            <FormItem {...offsetLayout}>
              <Button type="primary" onClick={this.handleSubmit}>注册</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}
export default Form.create()(FormRegister)