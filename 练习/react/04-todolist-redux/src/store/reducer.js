const defaultState  ={
	list:["吃饭","睡觉"],
	val:""
}

//1.reducer是一个函数
//2.reducer是一个纯函数(固定的输入就有固定的输出)
//3.reducer的主要作用是负责业务逻辑处理，生成新的state
export default (state=defaultState,action)=>{
	if(action.type == 'change_item'){
		//这么些不推荐
		/*state.val = action.payload;
		return state*/
		//推荐的做法
		//1.copy上一次的state
		const newState = JSON.parse(JSON.stringify(state))
		//2.修改新的satate再返回
		/*
			不是纯函数的例子
			newState.val = action.payload+Date.now
			newState.val = action.payload+Math.random()
		*/
		newState.val = action.payload;
		return newState
	}
	if(action.type == 'add_item'){
		console.log(state)
		const newState = JSON.parse(JSON.stringify(state))
		newState.list.push(state.val)
		newState.val = ''
		return newState
	}
	if(action.type == 'del_item'){
		const newState = JSON.parse(JSON.stringify(state))
		newState.list.splice(action.payload,1)
		return newState
	}
	return state;
}