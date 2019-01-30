$('.ad1btn').on('click',function(){
	$('#topad').toggleClass('topad');
	$('#ad1btn').toggleClass('ad1btn1');
});
/*下拉菜单*/
$(function(){
	$('.ng-left-div').hover(function(){
		var $this = $(this);
		var $site = $this.find('>.ng-sn-site-Down');
		$site.stop();
		$site.slideDown(200);
	},function(){
		var $this = $(this);
		var $site = $this.find('>.ng-sn-site-Down');
		$site.stop();	
		$site.slideUp(200);
	});
	/*点击事件*/
	$('.chazi-Lj').click(function(){
		$('.ng-sn-site-na').slideUp(200);
	})
});