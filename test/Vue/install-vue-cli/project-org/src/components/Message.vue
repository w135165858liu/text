<!--1.页面-->
<template>
	<div class="Message">
		<p>{{msg}}</p>
	</div>
</template>
<!--2.逻辑-->
<script>
	export default {
		name:'Message',
		props:{
			msg:String
		}
	}
</script>
<!--3.样式-->
<style scoped>
	p{
		color:blue;
	}
</style>