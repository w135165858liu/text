<!--1.页面-->
<template>
	<div class="App">
		<router-view></router-view>
		<TabBar />
	</div>
</template>
<!--2.逻辑-->
<script>
	//2.1引入组件
	import TabBar from './components/TabBar/TabBar'
	export default {
		name:'App',
		components:{
			TabBar
		}
	}
</script>
<!--3.样式-->
<style lang="less">
	.App{
		.rem(padding-bottom,60)
	}
</style>