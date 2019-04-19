/*
* @Author: TomChen
* @Date:   2019-04-09 19:29:30
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-15 19:47:41
*/

import React,{ Component,Fragment } from 'react'
import { BrowserRouter as Router, Route,Redirect,Switch } from "react-router-dom";

//引入Login组件
//等价于引入 './pages/login/index.js'
import Login from 'pages/login'
import Home from 'pages/home'

import './App.css'
import { getUserName } from 'util'

class App extends Component{

	render(){
		const ProtectRoute = ({component:Component,...rest})=>(
			<Route
				{...rest}
				render={(props)=>{
					console.log({...props})
					return getUserName()
					? <Component {...props} />
					: <Redirect to="/login" />
				}}
			/>
		)
		const LoginRoute = ({component:Component,...rest})=>{
		 	return getUserName()
			? <Redirect to="/" />
			: <Component {...rest} />
		}
		return( 
			<Router>
				<div className="App">
					<Switch>
						<ProtectRoute exact path="/" component={Home} />
						{
							//当匹配到路由"/login"后,渲染Login组件
						}
						<LoginRoute path="/login" component={Login} />
					</Switch>
				</div>
			</Router>
		)
	}
}


export default App;