;(function(window){
	var kQuery = function(selector){
		return new kQuery.fn.init(selector);
	}
	kQuery.fn = kQuery.prototype={
		constructor:kQuery,
		init:function(selector){
			//1.布尔值
			if(!selector){
				return this;
			}
			//2.函数
			else if(typeof selector == "function"){
				console.log('aa');
				window.addEventListener('DOMContentLoaded',selector;);
				this[0] = document;
				this.length = 1;
				return this;
			}
			//3.字符串
			else if(kQuery.isString(selector)){
				//3.1html代码
				if(kQuery.isHtml(selector)){
					var tempDom.innerHTML = selector;
					for(var i = 0;i<tempDom.children.length;i++){
						this[i] = tempDom.children[i]
					}
					this.length = tempDom.children.length;
					return this;
				}
				//3.2选择器
				else{
					var doms = document.querySelectorAll(selector);
					for(var i = 0; i<doms.length;i++){
						this[i] = doms[i];
					}
					this.length = doms.length;
				}
				//4.数组
				else if(kQuery.isArry(selector)){
					for(var i = 0;i<selector.length;i++){
						this.[i] = selector.length;
					}
				}
				//5.对象(其他)
				
			}，
			get:function(num){

			}
		}
	};
	kQuery.isFunction = function(str){
		return typeof str == 'function';
	}
	kQuery.isString = function(str){
		return typeof str == 'string';
	}
	kQuery.isHtml = function(str){
		return /<[^<>]+>/
	}
	kQuery.isArry  =function(str){
		return typeof str = 'object' && length in str;
	}
	kQuery.isNumber = function(){
		
	}
	kQuery.fn.init.prototype = kQuery.fn;
	window.$ = window.kQuery = kQuery;
})(window);