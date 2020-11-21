/*
 * @Author: 彭明明
 * @Date: 2020-11-21 09:48:27
 * @LastEditTime: 2020-11-21 13:36:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 */
import React, { Component } from 'react';
import {
    Input, Modal, Icon,
    Row, Col, Form,
    message, Radio,
    Button, Select,
    Table
} from 'antd';

const { Option } = Select
const { TextArea } = Input
const { confirm } = Modal

// const { registerReactDom, logoutReactDom } = scriptUtil;

class ModelConfigPage extends Component {

    state = {
        tableData: [],
        pagination: {
            pageSize: 10,
            current: 1,
        },
        addEditVisible: false,
        addEditType: '',
    }

    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        // registerReactDom(this, this.props)
        this.setState({
            tableData: [
                {
                    key: '1',
                    name: 'John Brown',
                    code: 32,
                    description: 'New York No. 1 Lake Park',
                    disabled: false,
                },
            ]
        })
    }
    componentWillUnmount = () => {
        // logoutReactDom(this, this.props)
    }

    // 表格改变
    onTableChange = (pagination, filters, sorter) => {
        console.log('table-onChange', pagination, sorter)
        this.setState({
            pagination,
        })
    }

    onAddOrEditClick = (type, record) => {
        console.log('click ' + type, record)
        this.setState({
            addEditVisible: true,
            addEditType: type,
        })
        if(this.AddEditModal){
            this.AddEditModal.initModal(record) //调用子组件的initModal方法
        }
    }

    render() {
        
        const {
            tableData,
            pagination,
            addEditType,
            addEditVisible,
        } = this.state

        // 样式
        const containerStyle = {
            padding: '0 20px',
            backgroundColor: '#F0F2F5',
            height: 'calc(100vh)',
        }
        const style = {
            backgroundColor: '#ffffff',
            padding: '15px',
        }
        const SearchStyle = {
            ...style,
            height: 80,
            display: 'flex',
            alignItems: 'center',
        }
        const tableStyle = {
            ...style,
            marginTop: '20px',
        }
        return <div style={containerStyle}>
            <MyHeader/>
            <div style={SearchStyle}>
                <SearchBar
                    {...this.props}
                    onSubmit={(values) => {
                        console.log('查询', values);
                    }}
                    onReset={() => {
                        console.log('重置')
                    }}
                />
            </div>
            <div style={tableStyle}>
                <MyTable
                    dataSource={tableData}
                    onChange={this.onTableChange}
                    pagination={pagination}
                    onAddOrEditClick={this.onAddOrEditClick}
                />
            </div>
            <AddEditModal
                ref="addEditModal"
                visible={addEditVisible}
                type={addEditType}
                {...this.props}
                onRef={c => this.AddEditModal = c}
                onCancel={() => {
                    this.setState({
                        addEditVisible: false
                    })
                }}
            />
        </div>
    }
}
export default Form.create()(ModelConfigPage)

// 新增和编辑的模态框
class AddEditModal extends Component {
    state = {}
    constructor(props) {
        super(props)
        if(props.onRef){//如果父组件传来该方法 则调用方法将子组件this指针传过去
            props.onRef(this)
        } 
    }

    initModal = (record) => {
        const { form } = this.props
        if (record) {
            let data = {
                ...record,
                disabled: record.disabled + ''
            }
            form.setFieldsValue(data)
        }
    }

    render() {

        const { type, visible, onCancel, form } = this.props

        const { getFieldDecorator } = form

        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
        };

        return <Modal
            title={`${type}组织`}
            visible={visible}
            width={700}
            okText="保存"
            cancelText="返回"
            onCancel={() => {
                setTimeout(() => form.resetFields(), 300)
                onCancel()
            }}
        >
             <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                 <Row>
                     <Col span={12}>
                        <Form.Item label="组织编码">
                            {getFieldDecorator('code', {
                                rules: [
                                {
                                    required: true,
                                    message: '请输入组织编码！',
                                },
                                ],
                            })(<Input disabled={type === '编辑'}/>)}
                        </Form.Item>
                        <Form.Item label="组织描述">
                            {getFieldDecorator('description', {
                                rules: [],
                            })(<TextArea cols={3}/>)}
                        </Form.Item>
                     </Col>
                     <Col span={12}>
                        <Form.Item label="组织名称">
                            {getFieldDecorator('name', {
                                rules: [
                                {
                                    required: true,
                                    message: '请输入组织名称！',
                                },
                                ],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="是否启用">
                            {getFieldDecorator('disabled', {
                                initialValue: 'true',
                                rules: [
                                    {
                                        required: true,
                                        message: '请选择！',
                                    },
                                ],
                            })(<Radio.Group>
                                    <Radio value="true">是</Radio>
                                    <Radio value="false">否</Radio>
                              </Radio.Group>)}
                        </Form.Item>
                     </Col>
                 </Row>
            </Form>
        </Modal>
    }
}

class MyTable extends Component {
    state = {
        selectedRowKeys: [],
    }
    constructor(props) {
        super(props)
    }

    render() {

        const {
            selectedRowKeys,
        } = this.state

        const {
            dataSource,
            pagination,
            onAddOrEditClick,
        } = this.props

        const {
            current,
            pageSize
        } = pagination

        console.log('dataSource', dataSource)
        // 表格字段
        const columns = [
            {
                title: '组织编码',
                dataIndex: 'code',
                key: 'code',
            },
            {
                title: '组织名称',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '组织描述',
                dataIndex: 'description',
                key: 'description',
            },
            {
                title: '是否启用',
                dataIndex: 'disabled',
                key: 'disabled',
                render: (text) => text ? '是' : '否',
            },
            {
                title: '操作',
                key: 'operation',
                render: (text, record) => {
                    const style = {
                        marginRight: 10
                    }
                    return <div>
                        <a
                            style={style}
                            onClick={() => onAddOrEditClick('编辑', record)}>
                            编辑
                        </a>
                        <a style={style} onClick={() => {
                            console.log('删除', record)
                            confirm({
                                title: '删除?',
                                content: '删除一条记录',
                                okText: '确定',
                                cancelText: '取消',
                                onOk() {
                                  return new Promise((resolve, reject) => {
                                    console.log('确认删除')
                                    resolve()
                                  }).catch(() => console.log('Oops errors!'));
                                },
                                onCancel() {},
                            });
                        }}>删除</a>
                        <a style={style} onClick={() => {
                            alert('配置')
                        }}>配置</a>
                    </div> 
                }
            },
        ];
        
        const btnStyle = {
            marginRight: 10,
        }
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log('selectedRowKeys', selectedRowKeys)
                this.setState({
                    selectedRowKeys,
                })
            }
        }
        return <div>
            <div style={{marginBottom: 15}}>
                <Button icon='plus' style={btnStyle} type="primary" onClick={() => onAddOrEditClick('新增')}>新增</Button>
                <Button icon='check' style={btnStyle} disabled={!selectedRowKeys.length}>启用</Button>
                <Button icon='close' style={btnStyle} disabled={!selectedRowKeys.length}>禁用</Button>
            </div>
            <Table
                dataSource={dataSource}
                columns={columns}
                rowSelection={rowSelection}
                onChange={this.props.onChange}
                pagination={{
                    current: current,
                    pageSize,
                    showSizeChanger: true,
                    showTotal: (total) => {
                        return `总共 ${total} 个项目`;
                    }
                }}
            />
        </div>
    }
}

class SearchBar extends Component {
    state = {}
    constructor(props) {
        super(props)
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                
                this.props.onSubmit(values)
            }
        });
    };

    handleReset = () => {
        this.props.form.resetFields()
        this.props.onReset()
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return  <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item label="组织名称">
            {getFieldDecorator('name', {
                rules: [],
            })(
                <Input
                    placeholder="请输入"
                />,
            )}
        </Form.Item>
        <Form.Item label="组织描述">
            {getFieldDecorator('description', {
                rules: [],
            })(
                <Input
                    placeholder="请输入"
                />,
            )}
        </Form.Item>
        <Form.Item label="是否启用">
            {getFieldDecorator('disabled', {
                rules: [],
            })(
                <Select placeholder="请选择" style={{width: 120}}>
                    <Option value='true' key={1}>是</Option>
                    <Option value='false' key={0}>否</Option>
                </Select>
            )}
        </Form.Item>
        <Form.Item>
            <Button
                style={{
                    marginRight: 15
                }}
                onClick={this.handleReset}
            >
                重置
            </Button>
            <Button type="primary" htmlType="submit">
                查询
            </Button>
        </Form.Item>
      </Form>
    }
}

// 头部组件
class MyHeader extends Component {
    render() {
        const style = {
            display: 'flex',
            fontSize: 16,
            fontWeight: 'bold',
            color: '#333333',
            height: '60px',
            alignItems: 'center',
        }
        const lineStyle = {
            backgroundColor: '#1890ff',
            marginRight: 12,
            width: 5,
            height: 20,
            borderRadius: '4px',
        }
        return <div style={style}>
            <span style={lineStyle}></span>
            <span>工厂装置模型</span>
        </div>
    }
}