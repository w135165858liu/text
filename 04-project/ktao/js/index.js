;(function($){
	var $menuDropdown = $('.dropdown');
	$menuDropdown.dropdown({
		js:true,
		mode:'slideUpDown',
		delay:200,
		eventName:''
	});
	$menuDropdown.on('dropdown-show',function(ev){
		var $elem = $(this);
		var loadUrl = $elem.data('load');
		if(!loadUrl) return;
		var $layer = $elem.find('.dropdown-layer')
		$.getJSON(loadUrl,function(data){
	 		var data1 = data[0];
	 		var data2 = data[1];
	 		var data11 = data1[0];
	 		var data12 = data1[1];
	 		var data21 = data2[0];
	 		var data22 = data2[1];
		 	var html = '';
		 		html += '<div class="myjdlist">';
		 		html += '<div class="fore1">';
		 		for(var i=0;i<data1.length;i++){
			 		html += '<div class="item"><a href="#" class="bs">'+data11[i].name+'</a></div>';
		 		};
		 		html += '</div>';
		 		html += '<div class="fore2">';
		 		for(var i=0;i<data2.length;i++){
			 		html += '<div class="item"><a href="#" class="bs">'+data12[i].name+'</a></div>';
		 		};
		 		html += '</div>';
		 		html += '</div>';
		 		html += '<div class="myjdlist myjdlist_2">';
		 		html += '<div class="fore1">';
		 		for(var i = 0;i<data2.length;i++){
		 			html += '<div class="item"><a href="#" class="bs">'+data21[i].name+'</a></div>';
		 		}
		 		html += '</div>';
		 		html += '<div class="fore2">';
		 		for(var i = 0;i<data2.length;i++){
		 			html += '<div class="item"><a href="#" class="bs">'+data22[i].name+'</a></div>';
		 		}
		 		html += '</div>';
		 		html += '</div>';
		 		setTimeout(function(){
			 		$layer.html(html)
		 		},1500);
		 })
	});
})(jQuery);
// <div class="myjdlist">
// 	<div class="fore1">
// 		<div class="item"><a href="#" class="bs">待处理订单</a></div>
// 		<div class="item"><a href="#" class="bs">返修退换货</a></div>
// 		<div class="item"><a href="#" class="bs">降价商品</a></div>
// 	</div>
// 	<div class="fore2">
// 		<div class="item"><a href="#" class="bs">消息</a></div>
// 		<div class="item"><a href="#" class="bs">我的问答</a></div>
// 		<div class="item"><a href="#" class="bs">我的关注</a></div>
// 	</div>
// </div>
// <div class="myjdlist myjdlist_2">
// 	<div class="fore1">
// 		<div class="item"><a href="#" class="bs">我的京豆</a></div>
// 		<div class="item"><a href="#" class="bs">我的白条</a></div>
// 	</div>
// 	<div class="fore2">
// 		<div class="item"><a href="#" class="bs">我的优惠券</a></div>
// 		<div class="item"><a href="#" class="bs">我的理财</a></div>
// 	</div>
// </div>