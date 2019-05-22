/*
* @Author: TomChen
* @Date:   2019-04-09 19:29:30
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-15 18:54:39
*/
import React,{ Component } from 'react'
import Layout from 'common/layout'
import { Table, Divider, Tag,Breadcrumb } from 'antd';
import { connect } from 'react-redux'
import { actionCreator } from './store'
import moment from 'moment'
import './index.css'

const columns = [{
	title: '用户名',
	dataIndex: 'username',
	key: 'username',

}, {
	title: '是否是管理员',
	dataIndex: 'isAdmin',
	key: 'isAdmin',
	render:isAdmin=>isAdmin?'是':'否'
}, {
	title: 'email',
	dataIndex: 'email',
	key: 'email',
},{
	title: '手机',
	dataIndex: 'phone',
	key: 'phone',
},{
	title: '注册时间',
	dataIndex: 'createdAt',
	key: 'createdAt',
}];

// const dataSource = [{
// 	key: '1',
// 	username: 'admin',
// 	isAdmin: true,
// 	email: '123456789@qq.com',
// 	phone:'121354654315',
// 	createdAt:'2019-4-23 8:59:00'
// }];
class User extends Component{
	componentDidMount(){
		this.props.handlePage(1);
	}
	render(){
		const { list,current,pageSize,total,handlePage,isFetching } = this.props;
		const dataSource = list.map(user=>{
			return {
				key:user.get('_id'),
				username: user.get('username'),
				isAdmin: user.get('isAdmin'),
				email: user.get('email'),
				phone:user.get('phone'),
				createdAt:moment(user.get('createdAt')).format('YYYY-MM-DD HH:mm:ss')
			}
		}).toJS()
		return (
			<div className="User" style={{ height: '100%'}}>
			<Layout>
			<Breadcrumb style={{ margin: '16px 0' }}>
			<Breadcrumb.Item>首页</Breadcrumb.Item>
			<Breadcrumb.Item>用户管理</Breadcrumb.Item>
			<Breadcrumb.Item>商品管理</Breadcrumb.Item>
			</Breadcrumb>
			<Table 
			columns={columns} 
			dataSource={dataSource} 
			pagination={{
				current:current,
				pageSize:pageSize,
				total:total
			}}
			onChange={(page)=>{
				handlePage(page.current)
			}}
			loading={{
				spinning:isFetching,
				tip:'正在加载'
			}}
			/>
			</Layout>
			</div>
			)
	}
}
const mapStateToProps = (state)=>{
	return {
		list:state.get('user').get('list'),
		current:state.get('user').get('current'),
		pageSize:state.get('user').get('pageSize'),
		total:state.get('user').get('total'),
		isFetching:state.get('user').get('isFetching'),
	}
}
const mapDispathToProps = (dispath)=>{
	return {
		handlePage:(page)=>{
			const action = actionCreator.getPageAction(page)
			dispath(action)
		}
	}
}

export default connect(mapStateToProps,mapDispathToProps)(User)