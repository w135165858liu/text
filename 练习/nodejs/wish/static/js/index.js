/*
* @Author: Tom
* @Date:   2018-07-25 14:33:24
* @Last Modified by:   TomChen
* @Last Modified time: 2019-03-24 17:30:14
*/

(function($){

	function getRandom(min,max) {	
		return Math.round(min + (max-min)*Math.random());
	}
	$wish = $('.wish');
	$wall = $('.wall');
	//获取父容器和自身的高度
	var wishWidth = $wish.width(),
		wishHeight = $wish.height(),
		wallHeight = $wall.height(),
		wallWidth = $wall.width();
	//1.让卡片实现拖拽
	$wish.pep({ constrainTo:".wall" });
	$wish.each(function(){
		let x = getRandom(0,wallWidth - wishWidth);
		let y = getRandom(0,wallHeight - wishHeight);
		$(this).css({
			transform:"matrix(1,0,0,1,"+x+","+y+")"
		})
	})
})(jQuery);	
