;(function($){
	$('.dropdown').dropdown({
		delay:200	
	});
	$('.dropdown').on('dropdown-show dropdown-shown dropdown-hide dropdown-hidden',function(ev){
		console.log("!:::",ev.type);
	});
	$('button').on('click',function(){

		$('.dropdown').dropdown('show');
	})
})(jQuery);