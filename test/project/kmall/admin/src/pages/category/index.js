/*
* @Author: TomChen
* @Date:   2019-04-09 19:29:30
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-15 18:54:39
*/
import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Route,Switch } from "react-router-dom";
import CategoryAdd from './add.js'
import CategoryList from './list.js'


class Category extends Component{
	render(){
		return (
			
			<Switch>
				<Route path="/category/add" component={CategoryAdd} />
				<Route path="/category" component={CategoryList} />
			</Switch>
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

export default connect(mapStateToProps,mapDispathToProps)(Category)