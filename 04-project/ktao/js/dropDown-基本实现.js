;(function($){
	function DropDown($elem,options){
		//罗列属性
		this.$elem = $elem;
		this.$layer = $elem.find('.dropdown-layer');
		this.activeClass = $elem.data('active')+'-active';
		this.options = options;
		//初始化
		this.init();

	}
	DropDown.prototype = {
		constructor:DropDown,
		init:function(){
			//1.初始化显示隐藏插件
			this.$layer.showHide(this.options);
			//2.监听显示隐藏事件
			this.$layer.on('show shown hide hidden',function(ev){
				this.$elem.trigger('dropdown-'+ev.type);
			}.bind(this));
			//3.绑定事件
			this.$elem.hover($.proxy(this.show,this),$.proxy(this.hide,this));
		},
		show:function(){
			this.$layer.showHide('show');
			this.$elem.addClass(this.activeClass);
		},
		hide:function(){
			this.$layer.showHide('hide');
			this.$elem.removeClass(this.activeClass);
		}
	}
	DropDown.DEFAULTS = {
		js:false,
		mode:'slideUpDown',
		eventName:''
	}
	$.fn.extend({
		dropdown:function(options){
			return this.each(function(){
				var $elem = $(this);
				options = $.extend({},DropDown.DEFAULTS,options)
				new DropDown($elem,options);
			})
		}
	})
})(jQuery);