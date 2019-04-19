import React,{ Component } from 'react'

import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';
import Header from 'common/header'
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
class AdminLayout extends Component{
    render(){
    	return (
		<div className="AdminLayout">
			<Layout>
				<Header />
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


export default AdminLayout