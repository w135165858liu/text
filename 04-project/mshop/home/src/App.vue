<!--1.页面-->
<template>
	<div class="App">
		hello
		<p>haha</p>
	</div>
</template>
<!--2.逻辑-->
<script>
	export default {
		name:'App',
		
	}
</script>
<!--3.样式-->
<style lang="less">
	.App{
		p{
			color:red;
			.rem(font-size,24);
		}
	}
</style>