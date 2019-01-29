$('.ad1btn').on('click',function(){
	$('#topad').toggleClass('topad');
	$('#ad1btn').toggleClass('ad1btn1');
});
/*下拉菜单*/
$(function(){
	$('.ng-item-div').hover(function(){
		var $this = $(this)
		var $site = $this.find('>.ng-sn-site-na')
		$site.slideDown(100)
	},function(){
		var $this = $(this)
		var $site = $this.find('>.ng-sn-site-na')		
		$site.slideUp(100)
	})
});
