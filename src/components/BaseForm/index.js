/**
 * CREATED DATE: 2018/11/9 22:05:07
 * author: Absent Min
 * email: 847679250@qq.com
 */
import React from 'react'
import {
  Input,
  Select,
  Form,
  Button,
  Checkbox,
  DatePicker
} from 'antd'
import Utils from '../../utils/utils'
const FormItem = Form.Item

class FilterForm extends React.Component {
  handleFilterSubmit = () => {
    let fieldsValues = this.props.form.getFieldsValue()
    this.props.filterSubmit(fieldsValues)
  }
  reset = () => {
    this.props.form.resetFields()
  }
  initFormList = () => {
    const { getFieldDecorator } = this.props.form
    const formList = this.props.formList
    console.log(formList)
    const formItemList = []
    if (formList && formList.length) {
      formList.forEach((item, i) => {
        let label = item.label
        let field = item.field
        let initialValue = item.initialValue
        let placeholder = item.placeholder
        let width = item.width
        let type = item.type

        if (type === 'INPUT') {
          const INPUT =
            <FormItem label={label} key={field}>
              {
                getFieldDecorator([field], {
                  initialValue
                })(
                 <Input type='text' placeholder={placeholder}/>
                )
              }
            </FormItem>
          formItemList.push(INPUT)
        } else if (type === 'SELECT') {
          const SELECT =
            <FormItem label={label} key={field}>
              {
                getFieldDecorator([field], {
                  initialValue
                })(
                  <Select
                    style={{width: width}}
                    placeholder={placeholder}
                  >
                    {Utils.getOptionList(item.list)}
                  </Select>
                )
              }
            </FormItem>
          formItemList.push(SELECT)
        } else if (type === 'CHECKBOX') {
          const CHECKBOX =
            <FormItem label={label} key={field}>
              {
                getFieldDecorator([field], {
                  valuePropName: 'checked',
                  initialValue
                })(
                  <Checkbox>
                    {label}
                  </Checkbox>
                )
              }
            </FormItem>
          formItemList.push(CHECKBOX)
        } else if (type === '时间查询') {
          const BEGINTIME =
              <FormItem label="订单时间">
                {
                  getFieldDecorator('startTime')(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
                  )
                }

              </FormItem>
          formItemList.push(BEGINTIME)
          const ENDTIME =
              <FormItem label="~" colon={false}>
                {
                  getFieldDecorator('endTime')(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
                  )
                }
              </FormItem>
          formItemList.push(ENDTIME)
        }
      })
    }
    return formItemList
  }
  render() {
    return(
      <Form layout="inline">
        {this.initFormList()}
        <FormItem>
          <Button type="primary" style={{margin:'0 20px'}} onClick={this.handleFilterSubmit}>查询</Button>
          <Button onClick={this.reset}>重置</Button>
        </FormItem>
      </Form>
    )
  }
}
export default Form.create({})(FilterForm)