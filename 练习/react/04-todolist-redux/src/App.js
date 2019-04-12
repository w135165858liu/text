import React,{ Component,Fragment } from 'react';
import { Button,Input,Row, Col,List } from 'antd'
import store from './store/index.js'
import {getAddItemAction,getChangeItemAction,getDelItemAction} from './store/actionCreator.js'
import AppUI from './AppUI.js'
class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			list:["吃饭"],
			val:''
		}
		console.log(store)
		// console.log(store.getState())
		// 初始化时获取store中的数据
		this.state = store.getState()
		//当store中的数据发生变化时触发
		store.subscribe(()=>{
			//获取store中的最新数据来更新当前组件的state数据
			this.setState(()=>store.getState())
		})
		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
	}
	handleAdd(){
		/*this.setState(preState=>({
			list:[...preState.list,preState.val],
			val:''
		}));*/
		const action = getAddItemAction()
		//通过调用store上的dipath方法派发action到store
		//store把action转发给reducer
		//reduce来处理action
		store.dispatch(action)
	}
	handleChange(ev){
		// const val = this.input.value
		const val = ev.target.value
		/*this.setState(()=>({
			val
		}))*/
		const action = getChangeItemAction(val);
		store.dispatch(action)
	}
	handleDel(index){
		/*const list = [...this.state.list]
		list.splice(index,1)
		this.setState(()=>({
			list
		}));*/
		const action = getDelItemAction(index)
		store.dispatch(action)
	}
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

export default App


