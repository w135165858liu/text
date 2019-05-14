<!--1.页面-->
<template>
	<div class="Header">
		<input 
			type="text"
			placeholder="请输入任务，按回车提交" 
			v-model="task"
			@keyup.enter="handleAdd"
		>
	</div>
</template>
<!--2.逻辑-->
<script>
	export default {
		name:'Header',
		data(){
			return {
				task:''
			}
		},
		props:{
			addTodos:Function
		},
		methods:{
			handleAdd(){
				//1.判断数据
				const task = this.task.trim();
				if(!task){
					alert('任务不能为空')
					return;
				}
				//2.生成todo对象
				const todo = {
					task,
					done:false
				}
				//3.插入数据
				this.addTodos(todo)
				//4.清空输入框
				this.task = ''
			}
		}
	}
</script>
<!--3.样式-->
<style scoped>
	.Header input{
		width: 100%;
		height: 30px;
		padding: 0 10px;
	}
	.Header{
		margin-bottom: 10px;
	}

</style>