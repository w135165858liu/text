import React,{ Component,Fragment } from 'react';
import './App.css';
import Item from './Item.js';

class App extends Component{
	constructor(props){
		console.log('App constructor ...')
		super(props)
		this.state = {
			list:["吃饭"],
			val:''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
	}
	static getDerivedStateFromProps(nextProps, prevState){
		console.log('getDerivedStateFromProps(nextProps, prevState)',nextProps, prevState)
		return {
		}
	}
	shouldComponentUpdate(nextProps, nextState){
		console.log('shouldComponentUpdate(nextProps, nextState)',nextProps, nextState)
		return true
		
	}
	getSnapshotBeforeUpdate(prevProps, prevState){
		console.log('getSnapshotBeforeUpdate(prevProps, prevState)',prevProps, prevState)
		return 123;
	}
	componentDidUpdate(prevProps, prevState,snapshot){
		console.log('componentDidUpdate(prevProps, prevState,snapshot)',prevProps, prevState,snapshot)
	}
	componentWillUnmount(){
		console.log('Item componentWillUnmount')
	}
	handleAdd(){
		this.setState(preState=>({
			list:[...preState.list,preState.val],
			val:''
		}));
	}
	handleChange(ev){
		// const val = this.input.value
		const val = ev.target.value
		this.setState(()=>({
			val
		}))
	}
	handleDel(index){
		const list = [...this.state.list]
		list.splice(index,1)
		this.setState(()=>({
			list
		}));
	}
	getItem(){
		return this.state.list.map((item,index)=>{
			return <Item key={index} content={item} handleDel={this.handleDel.bind(this,index)}/>
		})
	}
	render(){
		console.log('App render ...')
		return (
			<Fragment>
			<div className="App">
				<input  
				onChange={this.handleChange} 
				value={this.state.val}
				/>
				<button onClick={this.handleAdd}>新增</button>
				<ul>
					{
						this.getItem()
					}
				</ul>
				</div>
			</Fragment>
		)
	}
}

export default App


