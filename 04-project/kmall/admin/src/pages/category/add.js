/*
* @Author: TomChen
* @Date:   2019-04-09 19:29:30
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-15 18:54:39
*/
import React,{ Component } from 'react'
import {
	Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,
} from 'antd';
import { connect } from 'react-redux'
import Layout from 'common/layout'
const {option} = Select

class CategoryAdd extends Component{
	render(){
		const { getFieldDecorator } = this.props.form;
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
		const tailFormItemLayout = {
			wrapperCol: {
				xs: {
					span: 24,
					offset: 0,
				},
				sm: {
					span: 16,
					offset: 8,
				},
			},
		};
		return (
			<div className="CategoryAdd" style={{ height: '100%'}}>
			<Layout>
			<Breadcrumb style={{ margin: '16px 0' }}>
			<Breadcrumb.Item>首页</Breadcrumb.Item>
			<Breadcrumb.Item>分类管理</Breadcrumb.Item>
			<Breadcrumb.Item>分类添加</Breadcrumb.Item>
			</Breadcrumb>
			<Form {...formItemLayout} onSubmit={this.handleSubmit}>
			<Form.Item
			label="分类名称"
			{getFieldDecorator('email', {
				rules: [{
					required: true, message: '请输入分类名称',
				}],
			})(
			<Input placeholder="分类名称" />
			)}
			</Form.Item>
			</Form>
			</Layout>
			</div>
			)
	}
}
const mapStateToProps = (state)=>{
	return {

	}
}
const mapDispathToProps = (dispath)=>{
	return {

	}
}

export default connect(mapStateToProps,mapDispathToProps)(CategoryAdd)