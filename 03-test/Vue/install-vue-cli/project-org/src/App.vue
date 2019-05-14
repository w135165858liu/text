<!--1.页面-->
<template>
	<div class="App">
		<!--使用组件-->
		<Logo />
		<Message msg="您好" />
	</div>
</template>
<!--2.逻辑-->
<script>
	//2.1引入组件
	import Logo from './components/Logo.vue'
	import Message from './components/Message.vue'
	export default {
		name:'App',
		//注册组件
		components:{
			Logo,
			Message
		}
	}
</script>
<!--3.样式-->
<style>
</style>