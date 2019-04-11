import React,{ Component } from 'react';
import PropTypes = from 'prop-types'
class Item extends Component{
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
Item.PropTypes = {
	handleDel:PropTypes.func,
	content:PropTypes.string.isrequired

}
Item.defaultProps = {
	content:'睡觉'

}
export default Item