;(function($){
	$('.dropdown').dropdown({
		js:false,
		mode:'slideUpDown',
		delay:200,
		eventName:'click'		
	});
	$('.dropdown').on('dropdown-show dropdown-shown dropdown-hide dropdown-hidden',function(ev){
		console.log("!:::",ev.type);
	});
})(jQuery);