function animate(obj,attr,target,isLinear){
	var timer;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var current = parseFloat(getComputedStyle(obj,false)[attr]);
		if(attr == 'opacity'){
			current = Math.round(current * 100);
		}
		if(isLinear){
			if(current>target){
				iSpeed = -80;
			}else{
				iSpeed = 80;
			}
		}else{
			ispeed = (target - current)/10;
			ispeed = ispeed > 0 ? Math.ceil(ispeed) : Math.floor(ispeed);
		}
		if(!ispeed){
			clearInterval(obj.timer);
		}
		if(Math.abs(target-current)<Math.abs(ispeed)){
			oBox.style[attr]=target + 'px';
			clearInterval(obj.timer);

		}else{
			oBox.style[attr]=current + ispeed + 'px';
		}
		console.log(ispeed)
	},30);
}
function animate(obj,attr,target){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var current = parseFloat(getComputedStyle(obj,false)[attr]);
			if(attr == 'opacity'){
				current = Math.round(current * 100);
			}
			if(current>target){
				iSpeed = -80;
			}else{
				iSpeed = 80;
			}
			if(Math.abs(target-current)<Math.abs(iSpeed)){
				clearInterval(obj.timer);
				if(attr == 'opacity'){
					obj.style.opacity = target/100;
				}else{
					obj.style[attr] = target + 'px'
				}
			}else{
				if(attr == 'opacity'){
					obj.style.opacity=(current + iSpeed)/100;
				}else{
					obj.style[attr]=current + iSpeed+'px';
				}
			}
	},30);
}