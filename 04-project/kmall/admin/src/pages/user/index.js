/*
* @Author: TomChen
* @Date:   2019-04-09 19:29:30
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-15 18:54:39
*/
import React,{ Component } from 'react'
import Layout from 'common/layout'
import { Table, Divider, Tag } from 'antd';
import { connect } from 'react-redux'
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

const dataSource = [{
	key: '1',
	username: 'admin',
	isAdmin: true,
	email: '123456789@qq.com',
	phone:'121354654315',
	createdAt:'2019-4-23 8:59:00'
}];
class User extends Component{
	render(){
		const { list } = this.props;
		const dataSource = list.map(user=>{
			return {
				
			}
		})
		return (
			<div className="User" style={{ height: '100%'}}>
			<Layout>
				<Table columns={columns} dataSource={dataSource} />
			</Layout>
			</div>
			)
	}
}
const mapStateToProps = (state)=>{
	return {
		list:state.get('user').get('list'),
	}
}
const mapDispathToProps = (dispath)=>{
	return {

	}
}

export default connect(mapStateToProps,mapDispathToProps)(User)