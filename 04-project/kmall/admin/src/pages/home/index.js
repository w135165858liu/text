/*
* @Author: TomChen
* @Date:   2019-04-09 19:29:30
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-15 18:54:39
*/

import React,{ Component } from 'react'

import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import './index.css'

class Home extends Component{
    render(){
    	return (
		<div className="Home" style={{ height: '100%'}}>
			<Layout>
				<Header className="header">
					<div className="logo" style={{ color: '#fff' }}>
						KMALL
					</div>
				</Header>
			</Layout>
			<Layout>
				<Sider width={200} style={{ background: '#fff' }}>
					<Menu
					mode="inline"
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					style={{ height: '100%', borderRight: 0 }}
					>
						<Menu.Item key="1">首页</Menu.Item>
						<Menu.Item key="2">用户管理</Menu.Item>
						<Menu.Item key="3">商品管理</Menu.Item>
					</Menu>
				</Sider>
			</Layout>
		</div>
		)
    }
}


export default Home