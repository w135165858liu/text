;(function($){
	function DropDown($elem,options){
		//罗列属性
		this.$elem = $elem;
		this.$layer = $elem.find('.dropdown-layer');
		this.activeClass = $elem.data('active')+'-active';
		this.options = options;
		this.timer = 0
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
			console.log(this.options.eventName == 'click')
			if(this.options.eventName == 'click'){
				this.$elem.on('click',function(ev){
					ev.stopPropagation();
					this.show();
				}.bind(this));
				//点击document页面隐藏
				$(document).on('click',$.proxy(this.hide,this));
			}else{
				this.$elem.hover($.proxy(this.show,this),$.proxy(this.hide,this));
			}
		},
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
			clearTimeout(this.timer);
			this.$layer.showHide('hide');
			this.$elem.removeClass(this.activeClass);
		}
	}
	DropDown.DEFAULTS = {
		js:false,
		mode:'slideUpDown',
		delay:200,
		eventName:''
	}
	$.fn.extend({
		dropdown:function(options){
			return this.each(function(){
				var $elem = $(this);
				var dropdown = $elem.data('dropdown',dropdown);
				if(!dropdown){
					options = $.extend({},DropDown.DEFAULTS,options)
					dropdown = new DropDown($elem,options);
					$elem.data('dropdown',dropdown)
				}
				if(typeof dropdown[options] == 'function'){
					dropdown[options]();
				}
			})
		}
	})
})(jQuery);