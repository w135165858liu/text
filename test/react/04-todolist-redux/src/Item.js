import React,{ Component } from 'react';
import propTypes from 'prop-types'
class Item extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const { handleDel,content } = this.props
		return (
			<li onClick={handleDel}>
				{content}
			</li>
		)
	}
}
//isrequired 必须滴
Item.propTypes = {
	handleDel:propTypes.func,
	content:propTypes.string
}
Item.defaultProps = {
	content:'睡觉'

}
export default Item