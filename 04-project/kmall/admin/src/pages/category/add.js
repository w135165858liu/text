/*
* @Author: TomChen
* @Date:   2019-04-09 19:29:30
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-15 18:54:39
*/
import React,{ Component } from 'react'
import {
	Breadcrumb,Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,
} from 'antd';
const { Option } = Select
import { connect } from 'react-redux'
import Layout from 'common/layout'
import { actionCreator } from './store'
const {option} = Select

class CategoryAdd extends Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	componentDidMount(){
		this.props.getLevelOneCategories()
	}
	handleSubmit(e){
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				this.props.handleAdd(values);
			}
		});
	}
	render(){
		const { getFieldDecorator } = this.props.form;
		const { isAddFetching,leveOneCategories } = this.props;
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
			<Form {...formItemLayout}>
			<Form.Item label="分类名称">
			{getFieldDecorator('name', {
				rules: [{ required: true, message: '请输入分类名称' }],
			})(
			<Input placeholder="分类名称" style={{width:300}} />
			)}
			</Form.Item>
			<Form.Item label="父级分类">
			{getFieldDecorator('pid', {
				rules: [{ required: true, message: '请选择父级分类' }],
			})(
			<Select style={{ width: 300 }}>
			<Option value="0">根分类</Option>
			{
				leveOneCategories.map(category=>{
					return <Option key={category.get('_id')} valuse={category.get('_id')}>根分类/{category.get('name')}</Option>
				})
			}
			</Select>
			)}
			</Form.Item>
			<Form.Item {...tailFormItemLayout}>
			<Button
			type="primary" 
			loading={isAddFetching}
			onClick={this.handleSubmit}
			>
			提交 
			</Button>
			</Form.Item>
			</Form>
			</Layout>
			</div>
			)
	}
}
const WrappedCategoryAdd = Form.create()(CategoryAdd);
const mapStateToProps = (state)=>{
	return {
		isAddFetching:state.get('category').get('isAddFetching'),
		leveOneCategories:state.get('category').get('leveOneCategories')
	}
}
const mapDispathToProps = (dispatch)=>{
	return {
		handleAdd:(values)=>{
			const action = actionCreator.getAddAction(values);
			dispatch(action)
		},
		getLevelOneCategories:()=>{
			const action = actionCreator.getLevelOneCategoriesAction();
			dispatch(action)
		}
	}
}
export default connect(mapStateToProps,mapDispathToProps)(WrappedCategoryAdd)