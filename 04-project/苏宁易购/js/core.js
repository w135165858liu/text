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
	});
});
$(function(){	
	/*轮播图右侧评论*/
	var $pinglun =  $('.toutiao').find('ul').eq(0);
	function move(){
		var $pinglunJl = $pinglun.css('marginTop');
		if($pinglunJl === '-288px'){
			$pinglun.css({marginTop:'0px'})
		}
		$pinglun.animate({marginTop:'+=-144px'})
	}
	timer = setInterval(move,2000)
	$pinglun.hover(function(){
		clearInterval(timer)
	},function(){
		setInterval(move,2000)
	})
})
// $(function(){
// 	var $item = $('.animate-hc').find('.item');
// 	var $li = $('.four-hc').find('li');
// 	var $four = $('.four-hc');
// 	var $animate = $('.animate-hc')
// 	var $firstHc = $('.first-hc')
// 	$li.on("mouseover",function(){
// 		$firstHc.hover(function(){
// 			$four.fadeOut()
// 			$animate.fadeIn()
// 		},function(){
// 			$four.fadeIn()
// 			$animate.css({
// 				display:'none'
// 			})
// 		})
// 		var $thisIndex = $(this).index();
// 		$item.eq($thisIndex).addClass("cur").css({
// 				width:'655px'
// 			});
// 		$item.hover(function(){
// 			var $this = $(this);
// 			$this.addClass("cur").css({
// 				width:'655px'
// 			});
// 		},function(){
// 			var $this = $(this)
// 			$this.removeClass("cur").css({
// 				width:'53px'
// 			});
// 		})
// 	})
// })