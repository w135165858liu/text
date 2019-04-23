/*
* @Author: TomChen
* @Date:   2019-04-09 19:29:30
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-15 18:54:39
*/
import React,{ Component } from 'react'
import { Breadcrumb } from 'antd';
import Layout from 'common/layout'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

class CategoryList extends Component{
	render(){
		return (
			<div className="CategoryList" style={{ height: '100%'}}>
			<Layout>
			<Breadcrumb style={{ margin: '16px 0' }}>
			<Breadcrumb.Item>首页</Breadcrumb.Item>
			<Breadcrumb.Item>分类管理</Breadcrumb.Item>
			<Breadcrumb.Item>分类列表</Breadcrumb.Item>
			</Breadcrumb>
			<Link to="/category/add">添加分类</Link>
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

export default connect(mapStateToProps,mapDispathToProps)(CategoryList)