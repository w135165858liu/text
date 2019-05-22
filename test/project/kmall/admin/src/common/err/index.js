import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import { Alert } from 'antd';
import './index.css'
class Err extends Component{
    render(){
    	return (
		<div className="Err">
			<Alert
				message="页面不见了"
				description="页面好像走丢了."
				type="error"
				showIcon
			/>
			<Link to="/">返回首页</Link>
		</div>
		)
    }
}


export default Err