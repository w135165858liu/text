import React,{ Component,Fragment } from 'react';
import './App.css';
import Item from './Item.js';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			list:["吃饭","睡觉","玩"],
			val:''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}
	handleAdd(){
		/*this.setState({
			list:[...this.state.list,this.state.val],
			val:''
		})*/
		/*this.setState(()=>{
			return {
				list:[...this.state.list,this.state.val],
				val:''
			}
		})*/
		this.setState(preState=>({
			list:[...preState.list,
			preState.val],val:''
		}));
		console.log(this.ul.querySelectAll('li'))
	}
	handleChange(ev){
		// console.log(ev.target.value)
		/*this.setState({
			val:ev.target.value
		})*/
		const val = this.input.value
		// const val = ev.target.value;
		this.setState(()=>({
			val
		});
	}
	handleDel(index){
		// console.log('del',index)
		// this.state.list.splice(index,1)
		const list = [...this.state.list]
		list.splice(index,1)
		/*this.setState({
			list:list
		})*/
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
		return (
			<Fragment>
			<div className="App">
				<input  
				onChange={this.handleChange} 
				value={this.state.val}
				ref={(input)=>{
					this.input = input
				}}
				/>
				<button onClick={this.handleAdd}>新增</button>
				<ul ref={ul=>{this.ul = ul}}>
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


