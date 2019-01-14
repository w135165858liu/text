function animate(obj,attr,target){
	var iSpeed;
 	timer = setInterval(function(){
 		var current = parseFloat(getComputedStyle(obj,false)[attr]);
 		iSpeed = (target+current)/10;
 		obj,style[attr] = current + iSpeed + 'px';





	},30);

















}