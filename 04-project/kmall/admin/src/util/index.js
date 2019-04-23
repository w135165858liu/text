import axios from 'axios'
export const request = (options)=>{
	return new Promise((resolve,reject)=>{
		const params = {
			method:options.method || 'get',
			url:options.url || '',
			data:options.data || '',
			withCredentials:true
		}
		switch(params.method.toUpperCase()){
			case 'GET':
			case 'DELETE':
				params.params = options.data
				break
			default:
				params.data = options.data
		}
		axios(params)
		.then(result=>{
			const data = result.data;
			if(data.code == 10){//没有权限
				//移除前端的登录信息
				removeUserName();
				//跳转登陆页面
				window.location.href = '/login'
				reject('没有权限')

			}else{
				console.log('a',result)
				resolve(result.data)
			}
		})
		.catch(err=>{
			reject(err)
		})
	})
}
export const setUserName = (username)=>{
	window.localStorage.setItem('username',username)
}
export const getUserName = ()=>{
	return window.localStorage.getItem('username')
}
export const removeUserName = ()=>{
	window.localStorage.removeItem('username')
}