/*
* @Author: TomChen
* @Date:   2019-04-11 18:56:06
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-12 20:51:38
*/
import { fromJS } from 'immutable'

import * as types from './actionTypes.js'

const defaultState = fromJS({
	usernum:111,
	productnum:112,
	ordernum:113,
})
//1. reducer是一个函数
//2. reducer是一个纯函数(固定的输入就有固定的输出)
//3. reducer的主要作用是负责业务逻辑处理,生成新的state,由store来最终改变

export default (state=defaultState,action)=>{
	if(action.type == types.SET_COUNT){
		return state.merge({
			usernum:action.payload.usernum,
			productnum:action.payload.productnum,
			ordernum:action.payload.ordernum,
		})
	}

	return state;
}