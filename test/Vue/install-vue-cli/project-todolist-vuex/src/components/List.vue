<!--1.页面-->
<template>
	<div class="List">

		<Item
			v-for="(todo,index) in this.$store.state.todos"
			:todo="todo"
			:index="index"
			:key="index"
		/>
	</div>
</template>
<!--2.逻辑-->
<script>
	import Item from '../components/Item.vue'
	export default {
		name:'List',
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