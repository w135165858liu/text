(function($){
function Search($elem,options){
	//1.罗列属性
	this.$elem = $elem;
	this.options = options;
	this.$searchBtn = $elem.find('.search-button');
	this.$searchInput = $elem.find('.search-text');
	this.$searchForm = $elem.find('search-form');
	//2.初始化
	this.init();
	if(this.options.autocompelete){
		this.autocompelete();
	}
}
Search.prototype = {
	constructor:Search,
	init:function(){
		//1.绑定事件
		this.$searchBtn.on('click',$.proxy(this.submit,this));
	},
	submit:function(){
		if(this.getInputVal() == ''){
			return false;
		}
		this.$searchForm.trigger('submit')
	},
	getInputVal:function(){
		return $.trim(this.$searchInput.val());
	},
	autocompelete:function(){
		//1.监听输入框input事件
		this.$searchInput.on('input',$.proxy(this.getData,this));
	},
	getData:function(){
		console.log('will get data..');
		$.ajax({
			url:this.options.url+getInputVal(),
			dataType:"jsonp",
			jsonp:"callback"
		})
	}
	https://suggest.taobao.com/sug?code=utf-8&q=xx&_ksTS=1551777113147_2321&callback=jsonp2322&k=1&area=c2c&bucketid=16
}
Search.DEFAULTS = {
	autocompelete:true,
	url:"https://suggest.taobao.com/sug?&q=",

}
$.fn.extend({
	search:function(options){
		return this.each(function(){
			var $elem = $(this);
			var search = $elem.data('search');
			if(!search){
				options = $.extend({},Search.DEFAULTS,options);
				search = new Search($elem,options);
				$elem.data('search',search);
			}
			if(typeof search[options] == 'function'){
				search[options]();
			}
		})
	}
})
})(jQuery);