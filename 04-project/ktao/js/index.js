;(function($){
	$('.dropdown').dropdown({
		js:false,
		mode:'slideUpDown',
		delay:200	
	});
	$('.dropdown').on('dropdown-show dropdown-shown dropdown-hide dropdown-hidden',function(ev){
		console.log("!:::",ev.type);
	});
	$('button').on('click',function(){
		$('.dropdown').dropdown();
	})
})(jQuery);