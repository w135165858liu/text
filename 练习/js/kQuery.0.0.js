(function(window){
	var kQuery = function(selector){
		return new kQuery.fn.init(selector);
	}
	kQuery.fn = kQuery.prototype = {
		constructor:kQuery,
		init:function(selector){

		}
	}

	kQuery.prototype.init.prototype = kQuery.fn;
	window.kQuery = window.$ = kQuery;
})(window);