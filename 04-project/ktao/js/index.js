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
		 	if(!html){
		 		html += '<div class="myjdlist">';
		 		html += '<div class="fore1">';
		 		for(var i=0;i<data1.length;i++){
			 		html += '<div class="item"><a href="#" class="bs">'+data11[i].name+'</a></div>';
			 		console.log('aa')
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
		 	}
		 })
	});
	var $search = $('.header .search');
	$search.on('getData',function(ev,data){
		//1.根据数据生成html
		var html = getSearchLayerHtml(data,10)
		//2.加载html到下拉层
		if(html == ''){
			$search.search('hideLayer');
		}else{
			$search.search('appendHtml',html);
			$search.search('showLayer');

		}
	});
	$search.on('getNoData',function(ev,data){
		$search.search('appendHtml','');
		$search.search('hideLayer');
	});
	function getSearchLayerHtml(data,maxNum){
		var html = '';
		for(var i=0;i<data.result.length;i++){
			if(i>=maxNum) break;
			html += '<li class="search-item">'+data.result[i][0]+'</li>'
		}
		return html
	}
	$search.search();
})(jQuery);