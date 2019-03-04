(function($){
function Search($elem,options){
	//1.罗列属性
	this.$elem = $elem;
	this.options = options;
	this.$layer = $elem.find('.search-layer');
	this.activeClass = $elem.data('active')+'-active';
	this.timer = 0;
	//2.初始化
	this.init();
}
Search.prototype = {
	constructor:Search,
	init:function(){
		
	}，
	show:function(){
		if(this.options.delay){
			this.timer = setTimeout(function(){
				this.$layer.showHide('show');
				this.$elem.addClass(this.activeClass);
			}.bind(this),this.options.delay);
		}else{
			this.$layer.showHide('show');
			this.$elem.addClass(this.activeClass);
		}
	},
	hide:function(){
		clearTimer(this.timer);
		this.$layer.showHide('hide');
		this.$elem.removeClass(this.activeClass);
	}
}
Search.DEFAULTS = {
	delay:200
}
$.fn.extend({
	search:function(options){
		return this.each(function(){
			var $elem = $(this);
			var search = $elem.data('search',search);
			if(!search){
				options = $.extend({},search.DEFAULTS,options);
				search = new Search($elem,options);
				$elem.data('search',search)
			}
			if(typeof search[options] == 'function'){
				search[options]();
			}
		})
	}
})
})(jQuery);