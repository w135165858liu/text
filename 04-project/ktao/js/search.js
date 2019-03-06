(function($){
function Search($elem,options){
	//1.罗列属性
	this.$elem = $elem;
	this.options = options;
	this.$searchBtn = $elem.find('.search-button');
	this.$searchInput = $elem.find('.search-text');
	this.$searchForm = $elem.find('.search-form');
	this.$searchLayer = $elem.find('.search-layer');
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
		//1.监听初始化显示隐藏插件
		this.$searchLayer.showHide(this.options);
		//2.监听输入框input事件
		this.$searchInput.on('input',$.proxy(this.getData,this));
		//3.点击页面其他地方隐藏下拉层
		$(document).on('click',$.proxy(this.hideLayer,this));
		//4.inputh获取焦点时显示下拉层
		this.$searchInput.on('focus',$.proxy(this.sjhowLayer,this));
		//5.阻止input上click事件冒泡到document上触发
		this.$searchLayer.on('click',function(ev){
			ev.stopPropagation();
		});
	},
	getData:function(){
		console.log('will get data..');
		var inputVal = this.getInputVal();
		if(inputVal == ''){
			return
		}
		$.ajax({
			url:this.options.url+inputVal,
			dataType:"jsonp",
			jsonp:"callback"
		}).done(function(data){
			//1.根据数据生成html
			console.log(data)
			console.log(this.$searchLayer)
			var html = '';
			for(var i=0;i<data.result.length;i++){
				html += '<li class="search-item">'+data.result[i][0]+'</li>'
			}
			//2.加载html到下拉层
			this.appendHtml(html)
			//3.显示下拉层
			this.showLayer()
		}.bind(this)).fail(function(err){
			console.log(err)
		})
		},
		showLayer:function(){
			this.$searchLayer.showHide('show');
		},
		appendHtml:function(html){
			this.$searchLayer.html(html);
		},
		hideLayer:function(){
			this.$searchLayer.showHide('hide');
		}
}
Search.DEFAULTS = {
	autocompelete:true,
	url:"https://suggest.taobao.com/sug?&q=",
	js:true,
	mode:"slideUpDown"
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