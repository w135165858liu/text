import React,{ Component,Fragment } from 'react';
import { Button,Input,Row, Col,List } from 'antd'
import './App.css'


class AppUI extends Component{
	render(){
		// console.log(store)
		return (
			<div className="App">
				<Row>
					<Col span={12}>
						<Input  
						onChange={this.handleChange}
						value={this.state.val}
						/>
					</Col>

					<Col span={12}>
						<Button type="primary" onClick={this.handleAdd}>新增</Button>
					</Col>
				</Row>
				<List
					style={{marginTop:"20px"}}
					bordered
					dataSource={this.state.list}
					renderItem={(item,index) => (<List.Item onClick={this.handleDel.bind(this,index)}>{item}</List.Item>)}
				/>
			</div>
		)
	}
}

export default AppUI


