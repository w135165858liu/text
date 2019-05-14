<!--1.页面-->
<template>
	<div class="Footer">
		<input type="checkbox">
		<span>1/5</span>
		<button>删除所有完成的任务</button>
	</div>
</template>
<!--2.逻辑-->
<script>
	export default {
		name:'Footer'
	}
</script>
<!--3.样式-->
<style>
	.Footer{
		width: 100%;
		line-height: 40px;
	}
	.Footer input{
		float: left;
		margin-top: 14px;
		margin-right: 10px;
	}
	.Footer button{
		float: right;
		margin-top: 7px;
	}
</style>