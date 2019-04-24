/*
* @Author: TomChen
* @Date:   2019-04-11 20:15:26
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-12 20:09:18
*/
import * as types from './actionTypes.js'
import { request } from 'util';
import { GET_USERS,ADD_CATEGORY,GET_CATEGORIES } from 'api';
const getPageRequestAction = ()=>{
	return {
		type:types.PAGE_REQUEST
	}
}
const getPageDoneAction = ()=>{
	return {
		type:types.PAGE_DONE
	}
}
const getAddRequestAction = ()=>{
	return {
		type:types.PAGE_REQUEST
	}
}
const getAddDoneAction = ()=>{
	return {
		type:types.PAGE_DONE
	}
}
const setPageAction = (payload)=>{
	return {
		type:types.SET_PAGE,
		payload
	}
}
const setLevelOneCategoriesAction = (payload)=>{
	return {
		type:types.SET_LEVEL_ONE_CATEGORIES,
		payload
	}
}
export const getPageAction = (page)=>{
	return (dispatch)=>{
		dispatch(getPageRequestAction())
		request({
			
			url:GET_USERS,
			data:{
				page:page
			}
		})
		.then(result=>{
			if(result.code == 0){
				dispatch(setPageAction(result.data))
			}
		})
		.catch(err=>{
			console.log(err)
		})
		.finally((result)=>{
			dispatch(getPageDoneAction())
		})
	}
}
export const getAddAction = (values)=>{
	return (dispatch)=>{
		dispatch(getAddRequestAction())
		request({
			method:'post',
			url:ADD_CATEGORY,
			data:values
		})
		.then(result=>{
			if(result.code == 0){
				dispatch(setPageAction(result.data))
			}
		})
		.catch(err=>{
			console.log(err)
		})
		.finally((result)=>{
			dispatch(getAddDoneAction())
		})
	}	
}
export const getLevelOneCategoriesAction = ()=>{
	return (dispatch)=>{
		request({
			url:ADD_CATEGORY,
			data:{
				pid:0
			}
		})
		.then(result=>{
			console.log('aa::',result)
			dispatch(setLevelOneCategoriesAction(result.data))
		})
	}
}
