<!--1.页面-->
<template>
	<div class="List">

		<Item
			v-for="(todo,index) in todos"
			:todo="todo"
			:delTodo="delTodo"
			:index="index"
		/>
	</div>
</template>
<!--2.逻辑-->
<script>
	import Item from '../components/Item.vue'
	export default {
		name:'List',
		props:{
			todos:Array,
			delTodo:Function
		},
		components:{
			Item
		}
	}
</script>
<!--3.样式-->
<style>
	.List{
		width: 100%;
		
	}
</style>