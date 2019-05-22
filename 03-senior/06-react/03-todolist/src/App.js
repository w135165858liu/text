/*
* @Author: TomChen
* @Date:   2019-04-09 19:29:30
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-10 20:43:50
*/

import React,{ Component,Fragment } from 'react'
import { DatePicker,Button } from 'antd';

import Item from './Item.js'
import './App.css'
// import 'antd/dist/antd.css'; 

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			list:["吃饭"],
			val:''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
	}
	handleAdd(){
		this.setState(preState=>({
			list:[...preState.list,preState.val],
			val:''			
		}));
	}
	handleChange(ev){
		const val = ev.target.value
		this.setState(()=>({
			val
		}));
	}
	handleDel(index){
		const list = [...this.state.list]
		list.splice(index,1)
		this.setState(()=>({
			list
		}));
	}
	getItems(){
		return this.state.list.map((item,index)=>{
			return <Item key={index} content={item} handleDel={this.handleDel.bind(this,index)} />
		})
	}
	render(){
		return( 
			<div className="App">
				<input 
					onChange={this.handleChange} 
					value={this.state.val}
				/>
				<button onClick={this.handleAdd}>新增</button>
				<ul>
					{
						this.getItems()
					}
				</ul>
				<Button type="primary">Primary</Button>
				<DatePicker />
			</div>
		)
	}
}

export default App