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
	}
	handleAdd(){
		// console.log('add...')
		this.setState({
			list:[...this.state.list,this.state.val],
			val:''
		})
	}
	handleChange(ev){
		// console.log(ev.target.value)
		this.setState({
			val:ev.target.value
		})
	}
	handleDel(index){
		// console.log('del',index)
		// this.state.list.splice(index,1)
		const list = [...this.state.list]
		list.splice(index,1)
		this.setState({
			list:list
		})
		
	}
	render(){
		return (
			<Fragment>
			<div className="App">
				<input  onChange={this.handleChange.bind(this)} value={this.state.val}/>
				{
					//我是单行注释
					/*我是多行注释*/
				}
				<button onClick={this.handleAdd.bind(this)}>新增</button>
				<ul>
					{
						this.state.list.map((item,index)=>{
							/*return (
									<li key={index} onClick={this.handleDel.bind(this,index)}>{item}</li>

								)*/
							// return <Item key={index} content={item} list={this.state.list} index={index}/>
							return <Item key={index} content={item} handleDel={this.handleDel.bind(this,index)}/>
						})
					}
				</ul>
				</div>
			</Fragment>
		)
	}
}

export default App


