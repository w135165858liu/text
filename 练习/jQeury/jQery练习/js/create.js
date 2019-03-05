(function(){
	function Create(options,cb){
		this.options = options;
		this.$elem = $('<div></div>');
		this.prepend();
		this.bindEvent();
		this.init();
	}
	Create.prototype = {
		constructor:Create,
		init:function(){
			this.$elem.css({
				position:'absolute',
				width:this.options.width,
				height:this.options.height,
				background:this.options.bgColor,
				left:this.options.left,
				top:this.options.top
			})
		},
		prepend:function(){
			$('body').prepend(this.$elem)			
		},
		leftTop:function(){
			this.$elem.css({
				right:'',bottom:'',left:0,top:0
			})
		},
		rightBottom:function(){
			this.$elem.css({
				right:0,bottom:0,left:'',top:''
			})
		},
		bindEvent:function(){
			this.$elem.on('click',function(){
				var left = this.$elem.offset().left
				if(left == 0){
					this.rightBottom();
					console.log('b')
				}else{
					this.leftTop();
					console.log('a')
				}
			}.bind(this))
		}
	}
	Create.DEFAULTS = {
		width:'100px',
		height:'100px',
		bgColor:'red',
		left:'0',
		top:'0'
	}
	$.fn.extend({
		create:function(options){
			var $elem = this.$elem;
			options = $.extend({},Create.DEFAULTS,options)
			var create = new Create(options);
			return create
		}
	})

})(jQuery);