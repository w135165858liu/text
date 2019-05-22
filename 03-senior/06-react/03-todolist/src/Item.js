/*
* @Author: TomChen
* @Date:   2019-04-09 20:41:19
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-10 20:37:05
*/
import React,{ Component } from 'react'
import PropTypes from 'prop-types'

class Item extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const {handleDel, content} = this.props;
		return (
			<li onClick={handleDel}>
				{content}
			</li>
		)
	}
}

Item.propTypes = {
	handleDel:PropTypes.func,
	content:PropTypes.string.isRequired
}
Item.defaultProps = {
	content:'睡觉'
}

export default Item