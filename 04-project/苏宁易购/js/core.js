$('.ad1btn').on('click',function(){
	$('#topad').toggleClass('topad');
	$('#ad1btn').toggleClass('ad1btn1');
});
/*下拉菜单*/
$(function(){
	$('.ng-left-div').hover(function(){
		var $this = $(this);
		var $site = $this.find('>.ng-sn-site-Down');
		var $shop = $site.find('.shop-load')
		$site.stop();
		$site.slideDown(200,function(){
			$shop.css({
				display:'none'
			})
		});
	},function(){
		var $this = $(this);
		var $site = $this.find('>.ng-sn-site-Down');
		var $shop = $site.find('.shop-load')
		$site.stop();	
		$site.slideUp(200,function(){
			$shop.css({
				display:''
			})			
		});
	});
	/*点击事件*/
	$('.chazi-Lj').click(function(){
		$('.ng-sn-site-na').slideUp(200);
	})
});